
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ComentDocument = HydratedDocument<Coment>;

@Schema()
export class Coment {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const ComentSchema = SchemaFactory.createForClass(Coment);
