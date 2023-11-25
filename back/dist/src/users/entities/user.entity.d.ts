import { Rating } from '../../ratings/entities/rating.entity';
import { Ride } from '../../rides/entities/ride.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    ratings: Rating[];
    rides: Ride[];
}
