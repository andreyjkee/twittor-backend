import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from './user.entity';


@Entity()
export class UserFollow extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'time with time zone'})
  createdAt: Date;

  @ManyToOne(() => User)
  @JoinColumn()
  following: User;

  @ManyToOne(() => User)
  @JoinColumn()
  follower: User;
}
