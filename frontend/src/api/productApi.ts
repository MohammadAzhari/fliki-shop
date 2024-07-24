import { AxiosResponse } from "axios";
import api from "./api";
import { IProduct } from "../models/Product";

const listProducts = async (query: { page: number; limit: number }) => {
  const res = await api.get(`/products`, { params: query });
  return res.data as { products: IProduct[]; pagination: { total: number } };
};

const getProduct = async (id: string) => {
  const res = await api.get(`/products/${id}`);
  return res.data as IProduct;
};

export default { listProducts, getProduct };
