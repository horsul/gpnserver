import { OrderEntity } from '../order/order.entity';
import { ProductEntity } from '../product/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({ name: 'item' })
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  productId: number;

  @Column()
  orderId: number;

  @ManyToOne(() => ProductEntity, (r) => r.items)
  product: ProductEntity;

  @ManyToOne(() => OrderEntity, (r) => r.items)
  order: ProductEntity;
}
