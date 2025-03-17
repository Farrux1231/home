import { Module } from '@nestjs/common';
import { ComentService } from './coment.service';
import { ComentController } from './coment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Coment, ComentSchema } from './schema/coment.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Coment.name, schema: ComentSchema }]),],
  controllers: [ComentController],
  providers: [ComentService],
})
export class ComentModule {}
