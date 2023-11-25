import { VehicleDto } from '../../vehicles/dto/vehicle.dto';
import { DriverDto } from '../../drivers/dto/driver.dto';
export declare class RideDto {
    id: number;
    vehicle: VehicleDto;
    driver: DriverDto;
    startLocationLatitude: number;
    startLocationLongitude: number;
    endLocationLatitude: number;
    endLocationLongitude: number;
    totalPrice: number;
    status: 'pending' | 'completed';
}
