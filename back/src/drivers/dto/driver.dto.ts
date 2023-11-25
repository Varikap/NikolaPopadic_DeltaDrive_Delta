// src/drivers/dto/driver.dto.ts
import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '../../users/dto/user.dto';
import { VehicleDto } from '../../vehicles/dto/vehicle.dto';
import { RideDto } from '../../rides/dto/ride.dto';
import { RatingDto } from '../../ratings/dto/rating.dto';

export class DriverDto {
  @ApiProperty({ example: 1, description: 'Unique identifier for the driver' })
  @IsNumber()
  id: number;

  @ApiProperty({
    example: 'John',
    description: 'First name of the driver (from associated user)',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the driver (from associated user)',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: '1234567890',
    description: 'Phone number of the driver',
  })
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    example: 'ABC123',
    description: 'License number of the driver',
  })
  @IsString()
  licenseNumber: string;

  @ApiProperty({ type: UserDto, description: 'Details of the associated user' })
  user: UserDto;

  @ApiProperty({
    type: VehicleDto,
    description: 'Details of the associated vehicle',
  })
  vehicle: VehicleDto;

  @ApiProperty({
    type: RideDto,
    isArray: true,
    description: 'List of rides associated with the driver',
  })
  rides: RideDto[];

  @ApiProperty({
    type: RatingDto,
    isArray: true,
    description: 'List of ratings received by the driver',
  })
  ratings: RatingDto[];
}
