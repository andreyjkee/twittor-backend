import { Injectable } from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import {User} from '../users/entities/user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Tweet} from './entities/tweet.entity';
import {Repository} from 'typeorm';

@Injectable()
export class TweetsService {
  constructor(@InjectRepository(Tweet) private readonly tweetRepository: Repository<Tweet>) {}
  create(createTweetDto: CreateTweetDto, user: User) {
    const tweet =  this.tweetRepository.create({ ...createTweetDto, authorId: user.id });
    return this.tweetRepository.save(tweet);
  }

  findAll() {
    return this.tweetRepository.find({ relations: ['authorId'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} tweet`;
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return `This action updates a #${id} tweet`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweet`;
  }
}
