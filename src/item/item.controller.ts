import {
  Controller,
  Get,
  HttpStatus,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ItemDto } from './item.dto';
import { ItemEntity } from './item.entity';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getItemsQuery(
    @Query(
      'order',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    orderId: number,
  ): Promise<ItemDto[]> {
    return await this.itemService.getItems(orderId);
  }
}
