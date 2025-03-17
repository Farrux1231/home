import { Injectable } from '@nestjs/common';
import { CreateComentDto } from './dto/create-coment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Coment } from './schema/coment.schema';
import { Model } from 'mongoose';

@Injectable()
export class ComentService {
  constructor(
    @InjectModel(Coment.name) private comentModel: Model<Coment>,
  ) {}

  async create(createComentDto: CreateComentDto){
    const newComent = new this.comentModel(createComentDto);
    return await newComent.save();
  }
}
