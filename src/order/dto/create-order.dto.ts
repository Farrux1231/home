import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString } from "class-validator";

export class CreateOrderDto {
    @ApiProperty({
        default:"67d78723735006b1ecce817d",
    })
    @IsString()
    productId:string

    @IsString()
    userId:string

    @ApiProperty({
        default:"true",
    })
    @IsBoolean()
    accepted:boolean
}
