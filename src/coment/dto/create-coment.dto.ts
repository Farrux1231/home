import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export class CreateComentDto {
    @IsString()
    userId:string

    @ApiProperty({
        default:"67d78723735006b1ecce817d",
    })
    @IsString()
    productId:string

    @ApiProperty({
        default:"good",
    })
    @IsString()
    text:string
   
    @ApiProperty({
        default:"4.5",
    })
    @IsString()
    star:string
}
