import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { TypeRole } from '../dto/type.dto';
import { Category } from 'src/category/schema/category.schema';
import { User } from 'src/user/schema/user.schema';
import { Coment } from 'src/coment/schema/coment.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: Category;

  @Prop()
  desc: string;

  @Prop()
  price: string;

  @Prop({
    type: String,
    enum: TypeRole,
  })
  type: TypeRole;

  @Prop()
  garanty: boolean;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Coment' })
  commentId: Coment;

  @Prop()
  star: string;

  @Prop()
  image: string;

  @Prop()
  old_price: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
