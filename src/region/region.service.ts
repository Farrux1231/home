import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './schema/region.schema';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name) private readonly regionModel: Model<Region>,
  ) {}

  async create(createRegionDto: CreateRegionDto) {
    const newRegion = new this.regionModel(createRegionDto);
    return await newRegion.save();
  }

  async findAll() {
    return await this.regionModel.find().exec();
  }

  async findOne(id: string) {
    return await this.regionModel.findById(id).exec();
  }

  async update(id: string, updateRegionDto: UpdateRegionDto) {
    return await this.regionModel
      .findByIdAndUpdate(id, updateRegionDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.regionModel.findByIdAndDelete(id).exec();
  }
}
