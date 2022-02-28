import { Injectable } from '@nestjs/common';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderService {
  async getAllOrders(): Promise<OrderEntity[]> {
    return await OrderEntity.find();
  }

  async getOrder(id: number): Promise<OrderEntity> {
    return await OrderEntity.findOne(id);
  }
}
