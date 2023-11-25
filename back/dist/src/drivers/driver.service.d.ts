import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';
import { VehicleService } from '../vehicles/vehicle.service';
export declare class DriverService implements OnModuleInit {
    private readonly driverRepository;
    private readonly vehicleService;
    constructor(driverRepository: Repository<Driver>, vehicleService: VehicleService);
    onModuleInit(): Promise<void>;
    findOneById(id: number): Promise<Driver>;
    findAll(): Promise<Driver[]>;
    create(driverData: Partial<Driver>): Promise<Driver>;
    update(id: number, updatedDriver: Partial<Driver>): Promise<Driver>;
    remove(id: number): Promise<void>;
    private loadAndSaveCsvData;
    private randomNumber;
    private generateRandomPhoneNumber;
    private generateRandomLicenseNumber;
}
