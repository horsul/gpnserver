import { Injectable } from '@nestjs/common';
import { ProductEntity } from 'src/product/product.entity';
import { ItemDto } from './item.dto';
import { ItemEntity } from './item.entity';

@Injectable()
export class ItemService {
  async getItems(orderId: number): Promise<ItemDto[]> {
    const itemData = await ItemEntity.find({ orderId });

    return await Promise.all(
      itemData.map(async (r) => {
        const product = await ProductEntity.findOne({ id: r.productId });
        return new ItemDto(
          Object.assign(r, { name: product.name, price: product.price }),
        );
      }),
    );
  }
}
