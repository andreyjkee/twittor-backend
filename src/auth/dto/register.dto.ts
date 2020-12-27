import {LoginDto} from './login.dto';
import {IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator';

export class RegisterDto extends LoginDto {
  @IsString()
  passwordConfirm: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsOptional()
  bio: string;
}
