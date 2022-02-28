import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  async getAllProducts(): Promise<ProductEntity[]> {
    return await ProductEntity.find();
  }

  getProduct(id: number): string {
    return `product ${id}`;
  }
}
