import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateBookDto extends PartialType(CreateBookDto) {
    @IsString()
  @MaxLength(500)
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
