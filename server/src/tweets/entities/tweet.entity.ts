import {Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {User} from '../../users/entities/user.entity';
import { Comment } from './comment.entity';

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 270 })
  text: string;

  @ManyToOne(type => User, { nullable: false, onDelete: 'CASCADE' })
  @JoinTable()
  author: User;

  @OneToMany(() => Comment, comment => comment.tweet)
  comments: Comment[];
}
