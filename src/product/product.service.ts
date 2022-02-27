import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  // constructor(
  //   @InjectRepository(ProductEntity)
  //   private readonly productRepository: Repository<ProductEntity>,
  // ) {}

  getAllProducts(): string {
    return 'all products';
  }

  getProduct(id: number): string {
    return `product ${id}`;
  }
}
