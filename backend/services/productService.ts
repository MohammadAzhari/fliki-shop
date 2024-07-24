import Product, { IProduct } from "../models/Product";

interface PaginationParams {
  page: number;
  limit: number;
}

const listProducts = async ({
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

const getProduct = async (productId: string): Promise<IProduct | null> => {
  try {
    return Product.findById(productId);
  } catch (error: any) {
    throw new Error(`Error getting product: ${error.message}`);
  }
};

export default {
  getProduct,
  listProducts,
};
