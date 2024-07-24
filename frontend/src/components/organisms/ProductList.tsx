import { Box, Button, Flex } from "@radix-ui/themes";
import ProductCard from "../molecules/ProductCard";
import useListProducts from "../../hooks/useListProducts";
import ErrorCallout from "../atoms/ErrorCallout";

const ProductList = () => {
  const { error, hasMore, isLoading, loadMore, products } = useListProducts();

  if (error) {
    return <ErrorCallout message={error} />;
  }

  if (isLoading) {
  }

  return (
    <Box>
      <Flex gap="3" m="5" wrap="wrap" align="center" justify="center">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Flex>
      {hasMore && (
        <Flex align="center" justify="center" mb="5">
          <Button loading={isLoading} onClick={loadMore} variant="surface">
            Load More
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default ProductList;
