import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDriverDto {
  @ApiProperty({ example: 'John', description: 'First name of the driver' })
  @IsString({ message: 'First name must be a string' })
  @IsNotEmpty({ message: 'First name is required' })
  @IsOptional()
  firstName?: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the driver' })
  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty({ message: 'Last name is required' })
  @IsOptional()
  lastName?: string;

  @ApiProperty({
    example: '123456789',
    description: 'Phone number of the driver',
  })
  @IsString({ message: 'Phone number must be a string' })
  @IsNotEmpty({ message: 'Phone number is required' })
  @IsOptional()
  phoneNumber?: string;

  @ApiProperty({
    example: 'ABC123',
    description: 'License number of the driver',
  })
  @IsString({ message: 'License number must be a string' })
  @IsNotEmpty({ message: 'License number is required' })
  @IsOptional()
  licenseNumber?: string;
}
