import { Driver } from '../../drivers/entities/driver.entity';
import { Ride } from '../../rides/entities/ride.entity';
export declare class Vehicle {
    id: number;
    brand: string;
    latitude: number;
    longitude: number;
    startPrice: number;
    pricePerKm: number;
    isAvailable: boolean;
    rides: Ride[];
    driver: Driver;
}
