import { User } from '../../users/entities/user.entity';
import { Driver } from '../../drivers/entities/driver.entity';
import { Ride } from '../../rides/entities/ride.entity';
export declare class Rating {
    id: number;
    value: number;
    comment: string;
    user: User;
    driver: Driver;
    ride: Ride;
}
