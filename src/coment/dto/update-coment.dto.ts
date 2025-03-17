import { PartialType } from '@nestjs/mapped-types';
import { CreateComentDto } from './create-coment.dto';
import { IsString } from 'class-validator';

export class UpdateComentDto extends PartialType(CreateComentDto) {
    @IsString()
    userId:string

    @IsString()
    productId:string

    @IsString()
    text:string
    
    @IsString()
    star:string
}
