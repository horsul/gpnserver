import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ItemEntity } from '../item/item.entity';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @OneToMany(() => ItemEntity, (r) => r.product)
  items: ItemEntity[];
}
