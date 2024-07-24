import { Box, Button, Flex } from "@radix-ui/themes";
import ProductCard from "../molecules/ProductCard";

const ProductList = () => {
  return (
    <Box>
      <Flex gap="3" m="5" wrap="wrap" align="center" justify="center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Flex>
      <Flex align="center" justify="center" mb="5">
        <Button variant="surface">Load More</Button>
      </Flex>
    </Box>
  );
};

export default ProductList;
