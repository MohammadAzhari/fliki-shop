export interface ICreateOrder {
  products: {
    product: string;
    quantity: number;
  }[];
  totalAmount: number;
}
