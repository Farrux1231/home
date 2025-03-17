import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from 'src/product/schema/product.schema';
import { User } from 'src/user/schema/user.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
  productId: Product;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })  
  UserId: User;

  @Prop()
  accepted: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
