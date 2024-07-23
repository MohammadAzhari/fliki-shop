import Product, { IProduct } from "../models/Product";

interface PaginationParams {
  page: number;
  limit: number;
}

export const listProducts = async ({
  page = 1,
  limit = 10,
}: PaginationParams): Promise<{ products: IProduct[]; total: number }> => {
  try {
    const skip = (page - 1) * limit;
    const total = await Product.countDocuments();
    const products = await Product.find().skip(skip).limit(limit);
    return { products, total };
  } catch (error: any) {
    throw new Error(`Error listing products: ${error.message}`);
  }
};
