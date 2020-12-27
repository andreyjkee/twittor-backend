import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Comment} from './entities/comment.entity';
import {Repository} from 'typeorm';
import {TweetsService} from './tweets.service';
import {User} from '../users/entities/user.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private readonly commentRepository: Repository<Comment>,
    private readonly tweetsService: TweetsService,
  ) {}

  async addComment(createCommentDto: CreateCommentDto, tweetId: number, user: User) {
    const tweet = await this.tweetsService.findOne(tweetId);
    if (!tweet) throw new NotFoundException('Twitter not found');
    const comment = this.commentRepository.create({
      ...createCommentDto,
      tweet,
      author: user,
    });
    await this.commentRepository.insert(comment);
    return comment;
  }

  findAll() {
    return this.commentRepository.find();
  }

  async getTweetComments(tweetId: number) {
    const tweet = await this.tweetsService.findOne(tweetId);
    if (!tweet) throw new NotFoundException('Tweet not found');
    return this.commentRepository.find({ tweet });
  }

  findOne(id: number) {
    return this.commentRepository.findOne({ id });
  }

  async update(id: number, updateCommentDto: UpdateCommentDto, user: User) {
    const updatedTweet = await this.commentRepository.update({ id, author: user }, updateCommentDto);
    if (!updatedTweet.affected) {
      throw new NotFoundException('Comment is not found');
    }
    return this.findOne(id);
  }

  async removeMyComment(id: number, user: User) {
    const deleted = await this.commentRepository.delete({ id, author: user });
    if (!deleted.affected) {
      throw new NotFoundException('Comment is not found');
    }
    return deleted;
  }
}
