import {Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from '../../users/entities/user.entity';
import { Tweet } from './tweet.entity';

@Entity()
export class Comment {
  @ManyToOne(type => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinTable()
  author: User;

  @ManyToOne(type => Tweet, { nullable: false, onDelete: 'CASCADE' })
  @JoinTable()
  tweet: Tweet;
}