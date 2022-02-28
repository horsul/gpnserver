import { Injectable } from '@nestjs/common';
import { ItemEntity } from './item.entity';

@Injectable()
export class ItemService {
  async getItems(productId: number, orderId: number): Promise<ItemEntity[]> {
    return await ItemEntity.find({ productId, orderId });
  }
}
