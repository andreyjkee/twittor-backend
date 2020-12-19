import {Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {ApiTags} from '@nestjs/swagger';
import {AuthUser} from '../common/decorators/auth-user.decorator';
import {User} from '../users/entities/user.entity';

@ApiTags('comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':tweetId')
  create(
    @Param('tweetId', ParseIntPipe) tweetId: number,
    @Body() createCommentDto: CreateCommentDto,
    @AuthUser() user: User,
  ) {
    return this.commentsService.addComment(createCommentDto, tweetId, user);
  }

  @Get(':tweetId')
  getTweetComments(
    @Param('tweetId', ParseIntPipe) tweetId: number,
  ) {
    return this.commentsService.getTweetComments(tweetId);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
    @AuthUser() user: User,
  ) {
    return this.commentsService.update(+id, updateCommentDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @AuthUser() user: User) {
    return this.commentsService.removeMyComment(+id, user);
  }
}
