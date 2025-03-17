import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ComentModule } from './coment/coment.module';
import { OrderModule } from './order/order.module';
import { RegionModule } from './region/region.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/n16'),
    UserModule,
    ProductModule,
    CategoryModule,
    ComentModule,
    OrderModule,
    RegionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
