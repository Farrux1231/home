import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntite } from 'src/entities/book.intities';

@Module({
  imports:[TypeOrmModule.forFeature([BookEntite])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
