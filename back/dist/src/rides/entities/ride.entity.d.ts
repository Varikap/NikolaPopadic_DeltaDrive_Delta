import { User } from '../../users/entities/user.entity';
import { Vehicle } from '../../vehicles/entities/vehicle.entity';
import { Driver } from '../../drivers/entities/driver.entity';
import { Rating } from '../../ratings/entities/rating.entity';
export declare class Ride {
    id: number;
    startLocationLatitude: number;
    startLocationLongitude: number;
    endLocationLatitude: number;
    endLocationLongitude: number;
    totalPrice: number;
    status: 'driving' | 'completed';
    user: User;
    vehicle: Vehicle;
    driver: Driver;
    rating: Rating;
}
