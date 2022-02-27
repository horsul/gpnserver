import { ItemEntity } from '../item/item.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @OneToMany(() => ItemEntity, (r) => r.order)
  items: ItemEntity[];
}
