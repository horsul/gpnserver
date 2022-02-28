import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAll(): Promise<ProductEntity[]> {
    return await this.productService.getAllProducts();
  }

  @Get(':id')
  getProductParam(@Param() params): string {
    return this.productService.getProduct(params.id);
  }

  @Get('?')
  getProductQuery(@Query('id') id: number) {
    return this.productService.getProduct(id);
  }
}
