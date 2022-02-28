import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { ItemModule } from './item/item.module';
import { ItemService } from './item/item.service';
import { ProductEntity } from './product/product.entity';
import { OrderEntity } from './order/order.entity';
import { ItemEntity } from './item/item.entity';
import { ProductService } from './product/product.service';
import { OrderService } from './order/order.service';
import { ProductController } from './product/product.controller';
import { OrderController } from './order/order.controller';
import { ItemController } from './item/item.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: config.get<'aurora-data-api'>('DB_CONNECTION'),
        host: config.get<string>('DB_HOST'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB'),
        port: config.get<number>('DB_PORT'),
        entities: [ProductEntity, OrderEntity, ItemEntity],
        synchronize: true,
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    ProductModule,
    OrderModule,
    ItemModule,
  ],
  controllers: [
    AppController,
    ProductController,
    OrderController,
    ItemController,
  ],
  providers: [AppService, ProductService, OrderService, ItemService],
})
export class AppModule {}
