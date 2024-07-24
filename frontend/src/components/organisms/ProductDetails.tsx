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

const ProductDetails = () => {
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
          Product Title
        </Text>
        <AspectRatio ratio={16 / 9}>
          <img
            src="https://images.unsplash.com/photo-1479030160180-b1860951d696?&auto=format&fit=crop&w=1200&q=80"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ut
          repellendus porro, recusandae consequuntur est. Distinctio, architecto
          tempora amet autem vitae odio dolorum corporis excepturi, error
          tenetur eligendi, voluptates similique?
        </Text>
      </Box>
      <Box maxWidth="550px" width="100%" mt="3">
        <DataList.Root>
          <DataList.Item align="center">
            <DataList.Label minWidth="88px">Status</DataList.Label>
            <DataList.Value>
              <Badge color="jade" variant="soft" radius="full">
                Authorized
              </Badge>
            </DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">ID</DataList.Label>
            <DataList.Value>
              <Flex align="center" gap="2">
                <Code variant="ghost">u_2J89JSA4GJ</Code>
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
            <DataList.Label minWidth="88px">Name</DataList.Label>
            <DataList.Value>Vlad Moroz</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Email</DataList.Label>
            <DataList.Value>some</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="88px">Company</DataList.Label>
            <DataList.Value>some2</DataList.Value>
          </DataList.Item>
        </DataList.Root>
        <Flex gap="3" mt="8" width="100%" justify="between">
          <Button size="3" variant="solid">
            Add to cart
            <HeartIcon />
          </Button>
          <Button size="3" variant="outline">
            Buy now
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ProductDetails;
