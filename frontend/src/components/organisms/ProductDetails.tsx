import { CopyIcon, HeartIcon } from "@radix-ui/react-icons";
import {
  AspectRatio,
  Badge,
  Box,
  Button,
  Code,
  DataList,
  Flex,
  IconButton,
  Text,
} from "@radix-ui/themes";
import { useParams } from "react-router-dom";
import useGetProduct from "../../hooks/useGetProduct";
import ErrorCallout from "../atoms/ErrorCallout";
import { useAtom } from "jotai";
import cartActions from "../../state/actions/cartActions";

const ProductDetails = () => {
  const { id } = useParams();

  const { error, isLoading, product } = useGetProduct(id as string);

  const [, addItemToCart] = useAtom(cartActions.addItemToCart);

  const handleClickAddToCart = () => {
    addItemToCart({ product: product! });
  };

  if (error) {
    return <ErrorCallout message={error} />;
  }

  if (isLoading || !product) {
    return <></>;
  }

  return (
    <Flex
      gap="3"
      m="5"
      wrap="wrap"
      direction="column"
      align="center"
      justify="center"
    >
      <Box maxWidth="550px" width="100%">
        <Text size="4" weight="bold">
          {product.name}
        </Text>
        <AspectRatio ratio={16 / 9}>
          <img
            src={product.imageUrl}
            alt="A house in a forest"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-2)",
            }}
          />
        </AspectRatio>
        <Text size="2" color="gray">
          {product.description}
        </Text>
      </Box>
      <Box maxWidth="550px" width="100%" mt="3">
        <DataList.Root>
          <DataList.Item align="center">
            <DataList.Label minWidth="88px">Category</DataList.Label>
            <DataList.Value>
              <Badge color="jade" variant="soft" radius="full">
                {product.category}
              </Badge>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">ID</DataList.Label>
            <DataList.Value>
              <Flex align="center" gap="2">
                <Code variant="ghost">{product._id}</Code>
                <IconButton
                  size="1"
                  aria-label="Copy value"
                  color="gray"
                  variant="ghost"
                >
                  <CopyIcon />
                </IconButton>
              </Flex>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Price</DataList.Label>
            <DataList.Value>{product.price}$</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Stock</DataList.Label>
            <DataList.Value>{product.stock}</DataList.Value>
          </DataList.Item>
        </DataList.Root>
        <Flex gap="3" mt="8" width="100%" justify="between">
          <Button onClick={handleClickAddToCart} size="3" variant="solid">
            Add to cart
            <HeartIcon />
          </Button>
          <Button disabled size="3" variant="outline">
            Buy now
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductDetails;
