"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const driver_service_1 = require("../drivers/driver.service");
const user_service_1 = require("../users/user.service");
const vehicle_service_1 = require("../vehicles/vehicle.service");
const ride_entity_1 = require("./entities/ride.entity");
let RideService = class RideService {
    constructor(rideRepository, userService, vehicleService, driverService) {
        this.rideRepository = rideRepository;
        this.userService = userService;
        this.vehicleService = vehicleService;
        this.driverService = driverService;
    }
    async findOneById(id) {
        const ride = await this.rideRepository.findOneBy({ id });
        if (!ride) {
            throw new common_1.NotFoundException(`Ride with ID ${id} not found`);
        }
        return ride;
    }
    async orderRide(email, rideData) {
        try {
            const user = await this.userService.findOneByEmail(email);
            if (!user) {
                throw new common_1.NotFoundException(`User with email ${email} not found`);
            }
            const vehicle = await this.vehicleService.findOneById(rideData.vehicleId);
            if (!vehicle) {
                throw new common_1.NotFoundException(`Vehicle with ID ${rideData.vehicleId} not found`);
            }
            const driver = await this.driverService.findOneById(rideData.driverId);
            if (!driver) {
                throw new common_1.NotFoundException(`Driver with ID ${rideData.driverId} not found`);
            }
            const ride = new ride_entity_1.Ride();
            ride.startLocationLatitude = rideData.startLocationLatitude;
            ride.startLocationLongitude = rideData.startLocationLongitude;
            ride.endLocationLatitude = rideData.endLocationLatitude;
            ride.endLocationLongitude = rideData.endLocationLongitude;
            ride.totalPrice = rideData.totalPrice;
            ride.status = 'driving';
            ride.user = user;
            ride.vehicle = vehicle;
            ride.driver = driver;
            return this.rideRepository.save(ride);
        }
        catch (error) {
            console.error('Error ordering ride:', error.message || error);
        }
    }
    async markRideAsCompleted(id) {
        const ride = await this.findOneById(id);
        ride.status = 'completed';
        return this.rideRepository.save(ride);
    }
    async findAllCompleted(email) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            throw new common_1.NotFoundException(`User with email ${email} not found`);
        }
        return this.rideRepository.find({
            where: { status: 'completed', user: user },
        });
    }
    async findAll() {
        return this.rideRepository.find();
    }
    async create(rideData) {
        const ride = this.rideRepository.create(rideData);
        return this.rideRepository.save(ride);
    }
    async update(id, updateData) {
        await this.findOneById(id);
        await this.rideRepository.update(id, updateData);
        return this.findOneById(id);
    }
    async delete(id) {
        await this.findOneById(id);
        await this.rideRepository.delete(id);
    }
};
exports.RideService = RideService;
exports.RideService = RideService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ride_entity_1.Ride)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        vehicle_service_1.VehicleService,
        driver_service_1.DriverService])
], RideService);
//# sourceMappingURL=ride.service.js.map