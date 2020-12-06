import {Controller, Post, UseGuards, Request, Get, Body, Headers} from '@nestjs/common';
import {LocalAuthGuard} from './guards/local-auth.guard';
import {AuthService} from './auth.service';
import {JwtAuthGuard} from './guards/jwt-auth.guard';
import {ApiBasicAuth, ApiBearerAuth, ApiTags} from '@nestjs/swagger';
import {LoginDto} from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req, @Body() body: LoginDto) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
