import { Repository } from 'typeorm';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { Vehicle } from './entities/vehicle.entity';
export declare class VehicleService {
    private readonly vehicleRepository;
    constructor(vehicleRepository: Repository<Vehicle>);
    findOneById(id: number): Promise<Vehicle>;
    findAll(): Promise<Vehicle[]>;
    create(vehicleData: Partial<Vehicle>): Promise<Vehicle>;
    update(id: number, updateData: UpdateVehicleDto): Promise<Vehicle>;
    delete(id: number): Promise<void>;
    count(): Promise<number>;
    findClosestVehicles(latitude: number, longitude: number): Promise<Vehicle[]>;
    private calculateDistance;
    private deg2rad;
}
