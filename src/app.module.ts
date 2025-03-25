import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm"
import { BookModule } from './book/book.module';
import { BookEntite } from './entities/book.intities';
import { AuthorProfileModule } from './author-profile/author-profile.module';
import { AuthorProfileEntite } from './entities/authorProfile';
import { AuthorEntite } from './entities/author.intities';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '5779',
    database: 'n16',
    entities: [BookEntite, AuthorProfileEntite, AuthorEntite],
    synchronize: true, 
  }), BookModule, AuthorProfileModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
