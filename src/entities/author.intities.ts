import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BookEntite } from './book.intities'; 

@Entity()
export class AuthorEntite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  year: number;

  @OneToMany(() => BookEntite, (book) => book.author)
  books: BookEntite[];
}
