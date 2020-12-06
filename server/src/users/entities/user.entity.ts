import {Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, BaseEntity} from 'typeorm';
import {Tweet} from '../../tweets/entities/tweet.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column({ length: 300 })
  password: string;

  @Column({ length: 30 })
  username: string;

  @Column('text', { nullable: true })
  bio: string;
  //
  // @OneToMany(type => Tweet, tweet => tweet.authorId, { nullable: true })
  // tweets: Tweet[];
  // followers
  // following
  // tweets
  // comments
}
