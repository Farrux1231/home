import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schema/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto, userId:string) {
    let a = {
      ...createProductDto,
      userId:userId
    }
    const newProduct = new this.productModel(a);
    return await newProduct.save();
  }

  async findAll() {
    return await this.productModel
      .find()
      .populate('categoryId') 
      .populate({
        path: 'userId',       
        select: 'phone',       
      })
      .exec();
  }
  

  async findOne(id: string) {
    return await this.productModel.findById(id).populate('categoryId') 
    .populate({
      path: 'userId',       
      select: 'phone',       
    }).exec();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ) {
    return await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.productModel.findByIdAndDelete(id).exec();
  }
}
