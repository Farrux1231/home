import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
      @IsNotEmpty()
      name: string;
    
      @IsString()
      @IsNotEmpty()
      phone: string;
    
      @IsString()
      @IsNotEmpty()
      password: string;
    
      @IsString()
      @IsNotEmpty()
      role: string;
    
      @IsOptional()
      @IsString()
      regionId?: string;
    
      @IsOptional()
      @IsString()
      location?: string;
    
      @IsOptional()
      @IsString()
      shopname?: string;
    
      @IsOptional()
      @IsString()
      image?: string;
}
