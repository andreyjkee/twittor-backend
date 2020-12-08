import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, BaseEntity, JoinTable, OneToOne} from 'typeorm';
import {Tweet} from '../../tweets/entities/tweet.entity';
import {Comment} from '../../tweets/entities/comment.entity';
import { UserFollow } from './user-follow.entity';
import {UserProfile} from './user-profile.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 300, select: false })
  password: string;

  @Column({ length: 30 })
  username: string;

  @OneToOne(type => UserProfile, profile => profile.user)
  @JoinTable()
  profile: UserProfile;

  @OneToMany(() => Tweet, tweet => tweet.author)
  tweets: Tweet[];

  @OneToMany(() => Comment, comment => comment.author)
  comments: Tweet[];
}
