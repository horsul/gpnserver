import { Controller, Get, Param, Query } from '@nestjs/common';
import { OrderEntity } from './order.entity';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get(':id')
  async getProductParam(@Param() params): Promise<OrderEntity> {
    return await this.orderService.getOrder(params.id);
  }

  @Get('?')
  async getProductQuery(@Query('id') id: number): Promise<OrderEntity> {
    return await this.orderService.getOrder(id);
  }

  @Get()
  async getAll(): Promise<OrderEntity[]> {
    return await this.orderService.getAllOrders();
  }
}
