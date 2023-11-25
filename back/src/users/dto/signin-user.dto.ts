import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SigninUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'a@a.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'a' })
  password: string;
}
