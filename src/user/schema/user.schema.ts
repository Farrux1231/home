import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { UserRole } from '../dto/role.dto';
import { Region } from 'src/region/schema/region.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({unique:true})
  phone: string;

  @Prop()
  password: string;

  @Prop({
    type: String,
    enum: UserRole,
    default: UserRole.USER, 
  })
  role: UserRole;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Region' })  
  regionId: Region;

  @Prop()
  location: string;

  @Prop()
  shopname: string;

  @Prop()
  image: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
