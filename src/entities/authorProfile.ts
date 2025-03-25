import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { AuthorEntite } from './author.intities';

@Entity()
export class AuthorProfileEntite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  email: string;

  @Column({ length: 500 })
  password: string;

  @Column()
  year: number;

  @OneToOne(() => AuthorEntite, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn() 
  owner: AuthorEntite;
}
