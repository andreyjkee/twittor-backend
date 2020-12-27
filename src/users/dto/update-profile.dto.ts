import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UpdateProfileDto {
    @IsString()
    @IsOptional()
    firstName: string;

    @IsString()
    @IsOptional()
    lastName: string;

    @IsString()
    @IsOptional()
    bio: string;
}
