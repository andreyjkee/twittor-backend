import { Module } from '@nestjs/common';
import { TweetsService } from './tweets.service';
import { TweetsController } from './tweets.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from '../users/entities/user.entity';
import {Tweet} from './entities/tweet.entity';
import {CommentsController} from './comments.controller';
import {CommentsService} from './comments.service';
import {Comment} from './entities/comment.entity';

@Module({
  controllers: [TweetsController, CommentsController],
  providers: [TweetsService, CommentsService],
  imports: [TypeOrmModule.forFeature([User, Tweet, Comment])],
})
export class TweetsModule {}
