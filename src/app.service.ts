import { Injectable } from '@nestjs/common';
// import { getConnection } from 'typeorm';

@Injectable()
export class AppService {
  async initData(): Promise<void> {
    // for (const (i, index) in [1, 2, 5]) {
    //   const item = new ItemEntity();
    //   item.id = i + 1;
    //   item.productId = 1000 + i;
    //   item.orderId = 1;
    //   item.amount = Math.round(Math.random() * 100);
    //   await item.save();
    // }
    // return await getConnection()
    //   .createQueryBuilder()
    //   .select('product')
    //   .from(ProductEntity, 'product')
    //   .where('product.id = :id', { id: 2 })
    //   .getOne();
  }
}
