import Order, { ICreateOrder, IOrder } from "../models/Order";

const createOrder = async (orderData: ICreateOrder): Promise<IOrder> => {
  try {
    return Order.create(orderData);
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
};

export default {
  createOrder,
};
