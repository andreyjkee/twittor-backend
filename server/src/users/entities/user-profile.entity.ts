import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne} from 'typeorm';
import {User} from './user.entity';

@Entity()
export class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column('text')
  bio: string;

  @OneToOne(type => User, user => user.profile, { onDelete: 'CASCADE' })
  user: User;
}
