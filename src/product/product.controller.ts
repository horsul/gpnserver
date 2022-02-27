import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll(): string {
    return this.productService.getAllProducts();
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
