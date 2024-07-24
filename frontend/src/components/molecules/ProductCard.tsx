import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { IProduct } from "../../models/Product";

const ProductCard = (props: { product: IProduct }) => {
  return (
    <Box width="350px">
      <Card>
        <Flex gap="3">
          <Avatar
            size="8"
            src={props.product.imageUrl}
            radius="small"
            fallback="T"
          />
          <Flex direction="column" width="100%" justify="between">
            <Text as="div" size="2" weight="bold">
              {props.product.name}
            </Text>
            <Flex width="100%" align="center" gap="2" justify="end" mt="3">
              <Text weight="bold" size="2">
                {props.product.price}$
              </Text>
              <Link to={`/product/${props.product._id}`}>
                <Button variant="solid">Show details</Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};

export default ProductCard;
