import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './schema/category.schema';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto){
    const newCategory = new this.categoryModel(createCategoryDto);
    return await newCategory.save();
  }

  async findAll() {
    return await this.categoryModel
      .find()
      .populate('Product')
      .exec();
  }

  async findOne(id: string){
    return await this.categoryModel
      .findById(id)
      .populate({path:'Product', select:"name"})
      .exec();
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryModel
      .findByIdAndUpdate(id, updateCategoryDto, { new: true })
      .populate('product') 
      .exec();
  }


  async remove(id: string) {
    console.log(id);
    
    return await this.categoryModel.findByIdAndDelete(id).exec();
  }
}
