import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  async getAllProducts(): Promise<ProductEntity[]> {
    return await ProductEntity.find();
  }

  async getProduct(id: number): Promise<ProductEntity> {
    return await ProductEntity.findOne(id);
  }
}
