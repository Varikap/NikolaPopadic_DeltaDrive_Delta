import { FindClosestVehiclesDto } from './dto/find-closest-vehicles.dto';
import { VehicleService } from './vehicle.service';
export declare class VehicleController {
    private readonly vehicleService;
    constructor(vehicleService: VehicleService);
    findClosestVehicles(body: FindClosestVehiclesDto): Promise<import("./entities/vehicle.entity").Vehicle[]>;
}
