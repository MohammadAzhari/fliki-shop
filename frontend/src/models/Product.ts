export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
