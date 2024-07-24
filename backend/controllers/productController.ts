import { NextFunction, Request, Response } from "express";
import { listProducts } from "../services/productService";

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;

    const { products, total } = await listProducts({ page, limit });

    res.status(200).json({
      products,
      pagination: {
        page,
        limit,
        total,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
  } catch (error) {
    next(error);
  }
};
