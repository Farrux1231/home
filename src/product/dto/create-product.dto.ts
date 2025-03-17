import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @ApiProperty({
    default:"apple",
})
  title: string;

  @ApiProperty({
    default:"id asdfg",
})
  @IsString()
  categoryId: string;

  @ApiProperty({
    default:"good look and new garanty 2 months",
})
  @IsString()
  desc: string;

  @ApiProperty({
    default:"150",
})
  @IsOptional()
  @IsString()
  price?: string;

  @ApiProperty({
    default:"new",
})
  @IsString()
  type: string;

  @ApiProperty({
    default:"true",
})
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
