import { ItemEntity } from '../item/item.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('order')
export class OrderEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @OneToMany(() => ItemEntity, (r) => r.order)
  items: ItemEntity[];
}
