import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import {User} from '../users/entities/user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Tweet} from './entities/tweet.entity';
import {Repository} from 'typeorm';

@Injectable()
export class TweetsService {
  constructor(@InjectRepository(Tweet) private readonly tweetRepository: Repository<Tweet>) {}
  createTweet(createTweetDto: CreateTweetDto, user: User) {
    const tweet = this.tweetRepository.create({ ...createTweetDto, author: user });
    return this.tweetRepository.insert(tweet);
  }

  getTweets() {
    return this.tweetRepository.find();
  }

  findOne(id: number) {
   return this.tweetRepository.findOne({ id });
  }

  async updateMyTweet(id: number, updateTweetDto: UpdateTweetDto, user: User) {
    const updatedTweet = await this.tweetRepository.update({ id, author: user }, updateTweetDto);
    if (!updatedTweet.affected) {
      throw new NotFoundException('Tweet is not found');
    }
    return this.findOne(id);
  }

  async removeMyTweet(id: number, user: User) {
    const deleted = await this.tweetRepository.delete({ id, author: user });
    if (!deleted.affected) {
      throw new NotFoundException('Tweet is not found');
    }
    return deleted;
  }
}
