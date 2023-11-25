import { UserDto } from '../../users/dto/user.dto';
import { VehicleDto } from '../../vehicles/dto/vehicle.dto';
import { RideDto } from '../../rides/dto/ride.dto';
import { RatingDto } from '../../ratings/dto/rating.dto';
export declare class DriverDto {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    licenseNumber: string;
    user: UserDto;
    vehicle: VehicleDto;
    rides: RideDto[];
    ratings: RatingDto[];
}
