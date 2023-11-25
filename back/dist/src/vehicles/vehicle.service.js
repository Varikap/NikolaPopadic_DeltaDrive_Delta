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
exports.VehicleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const vehicle_entity_1 = require("./entities/vehicle.entity");
let VehicleService = class VehicleService {
    constructor(vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }
    async findOneById(id) {
        const vehicle = await this.vehicleRepository.findOneBy({ id });
        if (!vehicle) {
            throw new common_1.NotFoundException(`Vehicle with ID ${id} not found`);
        }
        return vehicle;
    }
    async findAll() {
        return this.vehicleRepository.find();
    }
    async create(vehicleData) {
        const vehicle = this.vehicleRepository.create(vehicleData);
        return this.vehicleRepository.save(vehicle);
    }
    async update(id, updateData) {
        await this.findOneById(id);
        await this.vehicleRepository.update(id, updateData);
        return this.findOneById(id);
    }
    async delete(id) {
        await this.findOneById(id);
        await this.vehicleRepository.delete(id);
    }
    async count() {
        return await this.vehicleRepository.count();
    }
    async findClosestVehicles(latitude, longitude) {
        const maxResults = 10;
        const vehicles = await this.vehicleRepository.find({
            relations: ['driver'],
        });
        const vehiclesWithDistances = vehicles.map((vehicle) => {
            const distance = this.calculateDistance(latitude, longitude, vehicle.latitude, vehicle.longitude);
            return { vehicle, distance };
        });
        vehiclesWithDistances.sort((a, b) => a.distance - b.distance);
        return vehiclesWithDistances
            .slice(0, maxResults)
            .map((item) => item.vehicle);
    }
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371;
        const dLat = this.deg2rad(lat2 - lat1);
        const dLon = this.deg2rad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) *
                Math.cos(this.deg2rad(lat2)) *
                Math.sin(dLon / 2) *
                Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        return distance;
    }
    deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
};
exports.VehicleService = VehicleService;
exports.VehicleService = VehicleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(vehicle_entity_1.Vehicle)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VehicleService);
//# sourceMappingURL=vehicle.service.js.map