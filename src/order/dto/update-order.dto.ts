import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsBoolean, IsString } from "class-validator";

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @IsString()
    productId:string

    @IsString()
    userId:string

    @IsBoolean()
    accepted:boolean
}
