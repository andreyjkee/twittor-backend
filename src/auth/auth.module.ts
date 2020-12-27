import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UsersModule} from '../users/users.module';
import { AuthController } from './auth.controller';
import {LocalStrategy} from './strategies/local.strategy';
import {JwtStrategy} from './strategies/jwt.strategy';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {JwtAuthGuard} from './guards/jwt-auth.guard';
import {APP_GUARD} from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'some@secret',
      signOptions: { expiresIn: '60d' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  controllers: [AuthController]
})
export class AuthModule {}
