import { NextFunction, Request, Response } from "express";
import productService from "../services/productService";

const listProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;

    const { products, total } = await productService.listProducts({
      page,
      limit,
    });

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

const getProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await productService.getProduct(productId);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export default {
  getProduct,
  listProducts,
};
