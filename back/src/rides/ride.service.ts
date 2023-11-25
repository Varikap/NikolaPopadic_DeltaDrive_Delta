import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverService } from '../drivers/driver.service';
import { UserService } from '../users/user.service';
import { VehicleService } from '../vehicles/vehicle.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { Ride } from './entities/ride.entity';

@Injectable()
export class RideService {
  constructor(
    @InjectRepository(Ride)
    private readonly rideRepository: Repository<Ride>,
    private readonly userService: UserService,
    private readonly vehicleService: VehicleService,
    private readonly driverService: DriverService,
  ) {}

  async findOneById(id: number) {
    const ride = await this.rideRepository.findOneBy({ id });
    if (!ride) {
      throw new NotFoundException(`Ride with ID ${id} not found`);
    }
    return ride;
  }

  async orderRide(email: string, rideData: CreateRideDto) {
    try {
      const user = await this.userService.findOneByEmail(email);
      if (!user) {
        throw new NotFoundException(`User with email ${email} not found`);
      }

      const vehicle = await this.vehicleService.findOneById(rideData.vehicleId);
      if (!vehicle) {
        throw new NotFoundException(
          `Vehicle with ID ${rideData.vehicleId} not found`,
        );
      }

      const driver = await this.driverService.findOneById(rideData.driverId);
      if (!driver) {
        throw new NotFoundException(
          `Driver with ID ${rideData.driverId} not found`,
        );
      }

      const ride = new Ride();
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
    } catch (error) {
      // TODO: Handle errors, log, and potentially rethrow
      console.error('Error ordering ride:', error.message || error);
    }
  }

  async markRideAsCompleted(id: number) {
    const ride = await this.findOneById(id);
    ride.status = 'completed';
    return this.rideRepository.save(ride);
  }

  async findAllCompleted(email: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return this.rideRepository.find({
      where: { status: 'completed', user: user },
    });
  }

  async findAll() {
    return this.rideRepository.find();
  }

  async create(rideData: CreateRideDto) {
    const ride = this.rideRepository.create(rideData);
    return this.rideRepository.save(ride);
  }

  async update(id: number, updateData: UpdateRideDto) {
    await this.findOneById(id);
    await this.rideRepository.update(id, updateData);
    return this.findOneById(id);
  }

  async delete(id: number) {
    await this.findOneById(id);
    await this.rideRepository.delete(id);
  }
}
