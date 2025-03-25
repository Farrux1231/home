import { Module } from '@nestjs/common';
import { AuthorProfileService } from './author-profile.service';
import { AuthorProfileController } from './author-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntite } from 'src/entities/author.intities';
import { AuthorProfileEntite } from 'src/entities/authorProfile';

@Module({
  imports:[TypeOrmModule.forFeature([AuthorEntite, AuthorProfileEntite])],
  controllers: [AuthorProfileController],
  providers: [AuthorProfileService],
})
export class AuthorProfileModule {}
