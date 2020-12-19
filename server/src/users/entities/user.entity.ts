import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, BaseEntity, JoinColumn, OneToOne} from 'typeorm';
import {Tweet} from '../../tweets/entities/tweet.entity';
import {Comment} from '../../tweets/entities/comment.entity';
import {UserProfile} from './user-profile.entity';

@Entity('app_user')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 300, select: false })
  password: string;

  @Column({ length: 30, unique: true, nullable: false })
  username: string;

  @Column({ length: 30, unique: true, nullable: false })
  email: string;

  @OneToOne(type => UserProfile, profile => profile.user, { eager: true })
  @JoinColumn()
  profile: UserProfile;

  @OneToMany(() => Tweet, tweet => tweet.author)
  tweets: Tweet[];

  @OneToMany(() => Comment, comment => comment.author)
  comments: Tweet[];
}
