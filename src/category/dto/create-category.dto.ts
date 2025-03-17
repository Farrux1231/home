import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    default:"electronik",
  })
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  image?: string;
}
