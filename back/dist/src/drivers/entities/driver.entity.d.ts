import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { Ride } from '../../rides/entities/ride.entity';
import { Rating } from '../../ratings/entities/rating.entity';
export declare class Driver {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    licenseNumber: string;
    vehicles: Vehicle[];
    rides: Ride[];
    ratings: Rating[];
}
