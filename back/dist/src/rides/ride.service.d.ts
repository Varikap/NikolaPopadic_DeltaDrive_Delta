import { Repository } from 'typeorm';
import { DriverService } from '../drivers/driver.service';
import { UserService } from '../users/user.service';
import { VehicleService } from '../vehicles/vehicle.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { Ride } from './entities/ride.entity';
export declare class RideService {
    private readonly rideRepository;
    private readonly userService;
    private readonly vehicleService;
    private readonly driverService;
    constructor(rideRepository: Repository<Ride>, userService: UserService, vehicleService: VehicleService, driverService: DriverService);
    findOneById(id: number): Promise<Ride>;
    orderRide(email: string, rideData: CreateRideDto): Promise<Ride>;
    markRideAsCompleted(id: number): Promise<Ride>;
    findAllCompleted(email: string): Promise<Ride[]>;
    findAll(): Promise<Ride[]>;
    create(rideData: CreateRideDto): Promise<Ride>;
    update(id: number, updateData: UpdateRideDto): Promise<Ride>;
    delete(id: number): Promise<void>;
}
