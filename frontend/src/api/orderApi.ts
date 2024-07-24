import { ICreateOrder } from "../models/Order";
import api from "./api";

const addOrder = async (createOrderDto: ICreateOrder) => {
  const res = await api.post(`/orders`, createOrderDto);
  return res.data;
};

export default {
  addOrder,
};
