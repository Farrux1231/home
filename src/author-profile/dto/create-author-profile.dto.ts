import { IsString, IsEmail, IsInt, Min, Max, Length } from 'class-validator';

export class CreateAuthorProfileDto {
  @IsString()
  @Length(1, 500)
  name: string;

  @IsEmail()
  @Length(1, 500)
  email: string;

  @IsString()
  @Length(6, 500) 
  password: string;

  @IsInt()
  @Max(new Date().getFullYear())
  year: number;
}
