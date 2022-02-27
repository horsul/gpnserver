import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly productRepository: Repository<OrderEntity>,
  ) {}

  getAllOrders(): string {
    return 'all orders';
  }

  getOrder(id: number): string {
    return `order ${id}`;
  }
}
