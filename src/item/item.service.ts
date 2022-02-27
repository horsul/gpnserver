import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
  getItems(productId: number, orderId: number): string {
    return `item productId=${productId} orderId=${orderId}`;
  }
}
