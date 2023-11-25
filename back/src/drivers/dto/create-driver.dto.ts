import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDriverDto {
  @ApiProperty({ example: 'John', description: 'First name of the driver' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the driver' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: '123456789',
    description: 'Phone number of the driver',
  })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({
    example: 'ABC123',
    description: 'License number of the driver',
  })
  @IsString()
  @IsNotEmpty()
  licenseNumber: string;
}
