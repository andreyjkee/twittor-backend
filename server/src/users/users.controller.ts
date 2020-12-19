import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {AuthUser} from '../common/decorators/auth-user.decorator';
import {User} from './entities/user.entity';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/list')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('')
  findOne(@AuthUser() user: User): User {
    return user;
  }

  @Put('')
  updateProfile(@AuthUser() user: User, @Body() updateProfileDto: UpdateProfileDto) {
    return this.usersService.updateProfile(user.profile.id, updateProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
