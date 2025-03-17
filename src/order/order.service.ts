import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schema/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const newOrder = new this.orderModel(createOrderDto);
    return await newOrder.save();
  }

  async findAll() {
    return await this.orderModel.find().populate('user').exec();
  }

  async findOne(id: string) {
    return await this.orderModel.findById(id).populate('user').exec();
  }

  async remove(id: string) {
    return await this.orderModel.findByIdAndDelete(id).exec();
  }
}
