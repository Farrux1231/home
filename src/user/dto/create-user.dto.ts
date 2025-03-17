import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default:"Alex",
})
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default:"901234567",
})
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
      default:"123456",
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default:"admin",
})
  role: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    default:"RegionID",
})
  regionId?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    default:"asdfg",
})
  location?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    default:"mystore",
})
  shopname?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    default:"ImageUrl",
})
  image?: string;
}

