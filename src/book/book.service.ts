import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntite } from 'src/entities/book.intities';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntite)
    private readonly bookRepository: Repository<BookEntite>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const newBook = this.bookRepository.create(createBookDto);
    return this.bookRepository.save(newBook);
  }

  async findAll() {
    return this.bookRepository.find({
      relations: ['author'], 
    });
  }

  async findOne(id: number) {
    return this.bookRepository.findOne({
      where: { id },
      relations: ['author'], 
    });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    await this.bookRepository.update({ id }, updateBookDto);
    return this.findOne(id); 
  }

  async remove(id: number) {
    return this.bookRepository.delete({ id });
  }
}
