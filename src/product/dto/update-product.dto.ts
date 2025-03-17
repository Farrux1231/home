import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @IsString()
      title: string;
    
      @IsString()
      categoryId: string;
    
      @IsString()
      desc: string;
    
      @IsOptional()
      @IsString()
      price?: string;
    
      @IsString()
      type: string;
    
      @IsOptional()
      @IsBoolean()
      garanty?: boolean;
    
      @IsOptional()
      @IsString()
      commentId?: string;
    
      @IsOptional()
      @IsString()
      star?: string;
    
      @IsOptional()
      @IsString()
      image?: string;
    
      @IsOptional()
      @IsString()
      old_price?: string;
}
