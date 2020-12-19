import {Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../../users/entities/user.entity';
import { Tweet } from './tweet.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  author: User;

  @ManyToOne(type => Tweet, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  tweet: Tweet;

  tweetId: number;
}
