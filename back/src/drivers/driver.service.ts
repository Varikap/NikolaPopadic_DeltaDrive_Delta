import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';
import * as csvtojson from 'csvtojson';
import { VehicleService } from '../vehicles/vehicle.service';

@Injectable()
export class DriverService implements OnModuleInit {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
    private readonly vehicleService: VehicleService,
  ) {}

  async onModuleInit() {
    await this.loadAndSaveCsvData();
  }

  async findOneById(id: number): Promise<Driver> {
    const driver = await this.driverRepository.findOneBy({ id });
    if (!driver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }
    return driver;
  }

  async findAll(): Promise<Driver[]> {
    return this.driverRepository.find();
  }

  async create(driverData: Partial<Driver>): Promise<Driver> {
    const driver = this.driverRepository.create(driverData);
    return this.driverRepository.save(driver);
  }

  async update(id: number, updatedDriver: Partial<Driver>): Promise<Driver> {
    const driver = await this.findOneById(id);
    return this.driverRepository.save({ ...driver, ...updatedDriver });
  }

  async remove(id: number): Promise<void> {
    const driver = await this.findOneById(id);
    await this.driverRepository.remove(driver);
  }

  private async loadAndSaveCsvData() {
    const areDriverAndVehicleTablesEmpty =
      (await this.driverRepository.count()) === 0 &&
      (await this.vehicleService.count()) === 0;

    if (!areDriverAndVehicleTablesEmpty) {
      console.log(
        'Driver and Vehicle tables are not empty. Skipping data insertion.',
      );
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

  private randomNumber = () => Math.floor(Math.random() * 10);

  private generateRandomPhoneNumber(): string {
    const phoneNumber = `06${this.randomNumber()}/${this.randomNumber()}${this.randomNumber()}-${this.randomNumber()}${this.randomNumber()}${this.randomNumber()}`;

    return phoneNumber;
  }

  private generateRandomLicenseNumber(): string {
    const licenseNumber = `${this.randomNumber()}${this.randomNumber()}${this.randomNumber()}-${this.randomNumber()}${this.randomNumber()}${this.randomNumber()}`;

    return licenseNumber;
  }
}
