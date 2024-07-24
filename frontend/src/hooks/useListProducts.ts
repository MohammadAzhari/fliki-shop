import { useEffect, useState } from "react";
import { IProduct } from "../models/Product";
import productApi from "../api/productApi";

const useListProducts = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [page, limit]);

  const fetchProducts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const {
        products: responseProducts,
        pagination: { total },
      } = await productApi.listProducts({
        page,
        limit,
      });
      setProducts(products.concat(responseProducts));
      setTotal(total);
    } catch (error) {
      setError("Error fetching products");
    }
    setIsLoading(false);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const hasMore = total > products.length;

  return {
    loadMore,
    products,
    isLoading,
    error,
    hasMore,
  };
};

export default useListProducts;
