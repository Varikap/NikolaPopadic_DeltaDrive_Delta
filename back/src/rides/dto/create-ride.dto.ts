import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsLatitude, IsLongitude, IsPositive } from 'class-validator';

export class CreateRideDto {
  @ApiProperty({
    example: 45.2164,
    description: 'Latitude of the starting location',
  })
  @IsNumber()
  @IsLatitude()
  startLocationLatitude: number;

  @ApiProperty({
    example: 19.8483,
    description: 'Longitude of the starting location',
  })
  @IsNumber()
  @IsLongitude()
  startLocationLongitude: number;

  @ApiProperty({
    example: 45.2234,
    description: 'Latitude of the ending location',
  })
  @IsNumber()
  @IsLatitude()
  endLocationLatitude: number;

  @ApiProperty({
    example: 19.8308,
    description: 'Longitude of the ending location',
  })
  @IsNumber()
  @IsLongitude()
  endLocationLongitude: number;

  @ApiProperty({ example: 25.0, description: 'Total price of the ride' })
  @IsNumber()
  @IsPositive()
  totalPrice: number;

  @ApiProperty({ example: 1, description: 'Id of the vehicle' })
  @IsNumber()
  vehicleId: number;

  @ApiProperty({ example: 1, description: 'Id of the driver' })
  @IsNumber()
  driverId: number;
}
