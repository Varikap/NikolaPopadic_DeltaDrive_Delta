import { CreateRideDto } from './dto/create-ride.dto';
import { RideService } from './ride.service';
export declare class RideController {
    private readonly rideService;
    constructor(rideService: RideService);
    orderRide(req: any, body: CreateRideDto): Promise<import("./entities/ride.entity").Ride>;
    markRideAsCompleted(id: number): Promise<import("./entities/ride.entity").Ride>;
    getCompletedRides(req: any): Promise<import("./entities/ride.entity").Ride[]>;
}
