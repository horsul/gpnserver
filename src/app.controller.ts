import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { ProductEntity } from './product/product.entity';

@Controller('init')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<void> {
    return await this.appService.initData();
  }
}
