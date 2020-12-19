import {Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinTable, JoinColumn} from 'typeorm';
import {User} from './user.entity';

@Entity()
export class UserProfile extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column('text', { nullable: true })
  bio: string;

  @OneToOne(
    type => User,
      user => user.profile,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn()
  user: User;
}
