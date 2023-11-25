import { IsString, IsEmail, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RatingDto } from '../../ratings/dto/rating.dto';

export class UserDto {
  @ApiProperty({ example: 1, description: 'Unique identifier for the user' })
  id: number;

  @ApiProperty({ example: 'john_doe', description: 'Username of the user' })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'strong_password',
    description: 'Password of the user',
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Email of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John', description: 'First name of the user' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: '1990-01-01', description: 'Birth date of the user' })
  @IsDate()
  birthDate: Date;

  @ApiProperty({
    type: RatingDto,
    isArray: true,
    description: 'List of ratings given by the user',
  })
  ratings: RatingDto[];
}
