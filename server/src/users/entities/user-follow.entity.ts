import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
  BaseEntity,
  JoinTable,
  OneToOne,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from './user.entity';


@Entity()
export class UserFollow extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'time with time zone'})
  createdAt: Date;

  @ManyToOne(() => User)
  @JoinTable()
  following: User;

  @ManyToOne(() => User)
  @JoinTable()
  follower: User;
}
