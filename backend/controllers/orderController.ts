import { NextFunction, Request, Response } from "express";
import { createOrder } from "../services/orderService";
import Joi from "joi";

const orderSchema = Joi.object({
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

export const addOrder = async (
  req: Request,
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
    const order = await createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
