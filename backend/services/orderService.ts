import Order, { IOrder } from "../models/Order";

export const createOrder = async (orderData: any): Promise<IOrder> => {
  try {
    const order = new Order(orderData);
    return await order.save();
  } catch (error) {
    throw new Error(`Error creating order: ${error.message}`);
  }
};
