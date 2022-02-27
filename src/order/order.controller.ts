import { Controller, Get, Param, Query } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getAll(): string {
    return this.orderService.getAllOrders();
  }

  @Get(':id')
  getProductParam(@Param() params): string {
    return this.orderService.getOrder(params.id);
  }

  @Get('?')
  getProductQuery(@Query('id') id: number) {
    return this.orderService.getOrder(id);
  }
}
