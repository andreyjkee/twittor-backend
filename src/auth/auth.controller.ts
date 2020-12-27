import {Controller, Post, UseGuards, Request, Get, Body} from '@nestjs/common';
import {LocalAuthGuard} from './guards/local-auth.guard';
import {AuthService} from './auth.service';
import {ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {LoginDto} from './dto/login.dto';
import {AuthUser} from '../common/decorators/auth-user.decorator';
import {User} from '../users/entities/user.entity';
import {Public} from '../common/decorators/public.decorator';
import {RegisterDto} from './dto/register.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@AuthUser() user, @Body() body: LoginDto): Promise<{ access_token: string }> {
    return this.authService.login(user);
  }

  @Public()
  @Post('/register')
  async register(@Body() registerDto: RegisterDto): Promise<{ access_token: string }> {
    return this.authService.register(registerDto);
  }

  @ApiBearerAuth()
  @Get('/profile')
  getProfile(@AuthUser() user: User): User {
    return user;
  }

}
