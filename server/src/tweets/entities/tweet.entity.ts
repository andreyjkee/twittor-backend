import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 270 })
  text: string;

  @Column()
  authorId: number;

  // author
  // originalTweet
  // images
  // likes from people
}
