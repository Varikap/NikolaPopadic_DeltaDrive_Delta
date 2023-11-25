import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VehicleDto } from '../../vehicles/dto/vehicle.dto';
import { DriverDto } from '../../drivers/dto/driver.dto';

export class RideDto {
  @ApiProperty({ example: 1, description: 'Unique identifier for the ride' })
  @IsNumber()
  id: number;

  @ApiProperty({
    type: VehicleDto,
    description: 'Details of the booked vehicle',
  })
  vehicle: VehicleDto;

  @ApiProperty({ type: DriverDto, description: 'Details of the driver' })
  driver: DriverDto;

  @ApiProperty({
    example: 40.7128,
    description: 'Current latitude position of the start location',
  })
  @IsNumber()
  startLocationLatitude: number;

  @ApiProperty({
    example: -74.006,
    description: 'Current longitude position of the start location',
  })
  @IsNumber()
  startLocationLongitude: number;

  @ApiProperty({
    example: 34.0522,
    description: 'Current latitude position of the end location',
  })
  @IsNumber()
  endLocationLatitude: number;

  @ApiProperty({
    example: -118.2437,
    description: 'Current longitude position of the end location',
  })
  @IsNumber()
  endLocationLongitude: number;

  @ApiProperty({ example: 50, description: 'Total price of the ride' })
  @IsNumber()
  totalPrice: number;

  @ApiProperty({
    enum: ['pending', 'completed'],
    example: 'completed',
    description: 'Status of the ride',
  })
  @IsString()
  status: 'pending' | 'completed';
}
