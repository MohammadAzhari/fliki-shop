import { useEffect, useState } from "react";
import { IProduct } from "../models/Product";
import productApi from "../api/productApi";

const useGetProduct = (productId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const responseProduct = await productApi.getProduct(productId);
      setProduct(responseProduct);
    } catch (error) {
      setError("Error fetching product");
    }
    setIsLoading(false);
  };

  return {
    product,
    isLoading,
    error,
  };
};

export default useGetProduct;
