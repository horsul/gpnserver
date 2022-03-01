import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('all')
  getAll(): Promise<ProductEntity[]> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductParam(@Param() params): Promise<ProductEntity> {
    return await this.productService.getProduct(params.id);
  }

  @Get()
  async getProductQuery(@Query('id') id: number): Promise<ProductEntity> {
    return await this.productService.getProduct(id);
  }
}
