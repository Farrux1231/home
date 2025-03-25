import { Injectable } from '@nestjs/common';
import { CreateAuthorProfileDto } from './dto/create-author-profile.dto';
import { UpdateAuthorProfileDto } from './dto/update-author-profile.dto';
import { AuthorProfileEntite } from 'src/entities/authorProfile';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntite } from 'src/entities/author.intities';

  
  @Injectable()
  export class AuthorProfileService {
    constructor(
      @InjectRepository(AuthorProfileEntite)
      private readonly authorProfileRepo: Repository<AuthorProfileEntite>,
      @InjectRepository(AuthorEntite)
      private readonly authorRepo: Repository<AuthorEntite>,
    ) {}
  
    async create(createAuthorProfileDto: CreateAuthorProfileDto) {
      const { name, year, email, password } = createAuthorProfileDto;
  
      const author = this.authorRepo.create({ name, year });
      await this.authorRepo.save(author);
  
      const authorProfile = this.authorProfileRepo.create({
        name,
        email,
        password,
        year,
      });
      await this.authorProfileRepo.save(authorProfile);
  
      return {
        message: 'AuthorProfile created successfully',
        authorProfile,
      };
    }
  
    async findAll() {
      return this.authorProfileRepo.find({
        relations: ['author'], 
      });
    }
  
    async findOne(id: number) {
      const authorProfile = await this.authorProfileRepo.findOne({
        where: { id },
        relations: ['author'], 
      });
  
      if (!authorProfile) {
        throw new Error(`AuthorProfile with ID ${id} not found`);
      }
  
      return authorProfile;
    }
  
    async update(id: number, updateAuthorProfileDto: UpdateAuthorProfileDto) {
      const existingProfile = await this.authorProfileRepo.findOne({ where: { id } });
      if (!existingProfile) {
        throw new Error(`AuthorProfile with ID ${id} not found`);
      }
  
      await this.authorProfileRepo.update({ id }, updateAuthorProfileDto);
  
      const { name, year } = updateAuthorProfileDto;
      if (name || year) {
        await this.authorRepo.update({ id }, { name, year });
      }
  
      return this.findOne(id); 
    }
  
    async remove(id: number) {
      const existingProfile = await this.authorProfileRepo.findOne({
        where: { id },
        relations: ['author'], 
      });
  
      if (!existingProfile) {
        throw new Error(`AuthorProfile with ID ${id} not found`);
      }
  
      await this.authorRepo.delete({ id });
  
      await this.authorProfileRepo.delete({ id });
  
      return { message: `AuthorProfile with ID ${id} removed successfully` };
    }
  }
  

