import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {Tweet} from '../tweets/entities/tweet.entity';
import {UserProfile} from './entities/user-profile.entity';
import {Comment} from '../tweets/entities/comment.entity';

@Module({
  controllers: [UsersController], //
  providers: [UsersService],
  exports: [UsersService],
  imports: [TypeOrmModule.forFeature([User, Tweet, UserProfile, Comment])]
})
export class UsersModule {}
