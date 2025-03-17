import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product.schema';
import { Category, CategorySchema } from 'src/category/schema/category.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])
],

  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
