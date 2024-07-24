import { NextFunction, Request, Response } from "express";
import orderService from "../services/orderService";
import Joi from "joi";
import { ICreateOrder } from "../models/Order";

const orderSchema = Joi.object<ICreateOrder>({
  products: Joi.array()
    .items(
      Joi.object({
        product: Joi.string().required(),
        quantity: Joi.number().integer().positive().required(),
      })
    )
    .min(1)
    .required(),
  totalAmount: Joi.number().positive().required(),
});

const ceateOrder = async (
  req: Request<any, any, ICreateOrder>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { error } = orderSchema.validate(req.body);
    if (error) {
      res
        .status(400)
        .json({ message: "Validation failed", details: error.details });
      return;
    }

    // Proceed with creating the order
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export default {
  ceateOrder,
};
