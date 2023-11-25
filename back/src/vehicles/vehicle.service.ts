import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
  ) {}

  async findOneById(id: number) {
    const vehicle = await this.vehicleRepository.findOneBy({ id });
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID ${id} not found`);
    }
    return vehicle;
  }

  async findAll() {
    return this.vehicleRepository.find();
  }

  async create(vehicleData: Partial<Vehicle>) {
    const vehicle = this.vehicleRepository.create(vehicleData);
    return this.vehicleRepository.save(vehicle);
  }

  async update(id: number, updateData: UpdateVehicleDto) {
    await this.findOneById(id);
    await this.vehicleRepository.update(id, updateData);
    return this.findOneById(id);
  }

  async delete(id: number) {
    await this.findOneById(id);
    await this.vehicleRepository.delete(id);
  }

  async count() {
    return await this.vehicleRepository.count();
  }

  async findClosestVehicles(
    latitude: number,
    longitude: number,
  ): Promise<Vehicle[]> {
    const maxResults = 10;

    const vehicles = await this.vehicleRepository.find({
      relations: ['driver'],
    });

    const vehiclesWithDistances = vehicles.map((vehicle) => {
      const distance = this.calculateDistance(
        latitude,
        longitude,
        vehicle.latitude,
        vehicle.longitude,
      );
      return { vehicle, distance };
    });

    vehiclesWithDistances.sort((a, b) => a.distance - b.distance);

    return vehiclesWithDistances
      .slice(0, maxResults)
      .map((item) => item.vehicle);
  }

  private calculateDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const R = 6371; // Earth radius in kilometers

    const dLat = this.deg2rad(lat2 - lat1);
    const dLon = this.deg2rad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in kilometers
    return distance;
  }

  private deg2rad(deg: number): number {
    return deg * (Math.PI / 180);
  }
}
