import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';
import { Optional } from '@nestjs/common';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    name:string

    @Optional()
    image?:string
}
