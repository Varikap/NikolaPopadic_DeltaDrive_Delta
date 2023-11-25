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
exports.DriverService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const driver_entity_1 = require("./entities/driver.entity");
const csvtojson = require("csvtojson");
const vehicle_service_1 = require("../vehicles/vehicle.service");
let DriverService = class DriverService {
    constructor(driverRepository, vehicleService) {
        this.driverRepository = driverRepository;
        this.vehicleService = vehicleService;
        this.randomNumber = () => Math.floor(Math.random() * 10);
    }
    async onModuleInit() {
        await this.loadAndSaveCsvData();
    }
    async findOneById(id) {
        const driver = await this.driverRepository.findOneBy({ id });
        if (!driver) {
            throw new common_1.NotFoundException(`Driver with ID ${id} not found`);
        }
        return driver;
    }
    async findAll() {
        return this.driverRepository.find();
    }
    async create(driverData) {
        const driver = this.driverRepository.create(driverData);
        return this.driverRepository.save(driver);
    }
    async update(id, updatedDriver) {
        const driver = await this.findOneById(id);
        return this.driverRepository.save({ ...driver, ...updatedDriver });
    }
    async remove(id) {
        const driver = await this.findOneById(id);
        await this.driverRepository.remove(driver);
    }
    async loadAndSaveCsvData() {
        const areDriverAndVehicleTablesEmpty = (await this.driverRepository.count()) === 0 &&
            (await this.vehicleService.count()) === 0;
        if (!areDriverAndVehicleTablesEmpty) {
            console.log('Driver and Vehicle tables are not empty. Skipping data insertion.');
            return;
        }
        const csvFilePath = 'delta-drive.csv';
        const jsonArray = await csvtojson().fromFile(csvFilePath);
        for (const item of jsonArray) {
            const driverData = {
                firstName: item.firstName,
                lastName: item.lastName,
                phoneNumber: this.generateRandomPhoneNumber(),
                licenseNumber: this.generateRandomLicenseNumber(),
            };
            const savedDriver = await this.create(driverData);
            const vehicleData = {
                brand: item.brand,
                latitude: parseFloat(item.latitude),
                longitude: parseFloat(item.longitude),
                startPrice: parseFloat(item.startPrice),
                pricePerKm: parseFloat(item.pricePerKM),
                isAvailable: true,
                driver: savedDriver,
            };
            await this.vehicleService.create(vehicleData);
        }
    }
    generateRandomPhoneNumber() {
        const phoneNumber = `06${this.randomNumber()}/${this.randomNumber()}${this.randomNumber()}-${this.randomNumber()}${this.randomNumber()}${this.randomNumber()}`;
        return phoneNumber;
    }
    generateRandomLicenseNumber() {
        const licenseNumber = `${this.randomNumber()}${this.randomNumber()}${this.randomNumber()}-${this.randomNumber()}${this.randomNumber()}${this.randomNumber()}`;
        return licenseNumber;
    }
};
exports.DriverService = DriverService;
exports.DriverService = DriverService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(driver_entity_1.Driver)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        vehicle_service_1.VehicleService])
], DriverService);
//# sourceMappingURL=driver.service.js.map