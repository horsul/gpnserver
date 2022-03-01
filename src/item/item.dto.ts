export class ItemDto {
  constructor({
    id = null,
    amount = null,
    orderId = null,
    productId = null,
    name = null,
    price = null,
  }: {
    id: number;
    amount?: number;
    orderId: number;
    productId: number;
    name: string;
    price?: number;
  }) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.orderId = orderId;
    this.productId = productId;
    this.price = price;
  }

  id: number;

  amount: number;

  productId: number;

  orderId: number;

  name: string;

  price: number;
}
