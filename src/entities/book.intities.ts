import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { AuthorEntite } from './author.intities'; 

@Entity()
export class BookEntite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column('text')
  description: string;

  @ManyToOne(() => AuthorEntite, (author) => author.books, { onDelete: 'CASCADE' })
  author: AuthorEntite;
}
