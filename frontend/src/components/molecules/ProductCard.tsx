import { Avatar, Box, Button, Card, Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

const ProductCard = (props: {}) => {
  return (
    <Box maxWidth="350px">
      <Card>
        <Flex gap="3">
          <Avatar
            size="8"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="small"
            fallback="T"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              Teodros Girmay
            </Text>
            <Text
              as="p"
              size="2"
              color="gray"
              className="text-ellipsis overflow-hidden h-20"
            >
              Engineering as software engineer of the following architecture
              design and the figma and so on the edge cases of the all senarios
              in the industry Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Nobis voluptatum voluptatibus in delectus non
              ab, saepe eius commodi at. At explicabo error possimus quidem.
              Dolor fugiat facere at blanditiis expedita.
            </Text>
            <Flex justify="end" mt="3">
              <Link to={"/product/1"}>
                <Button variant="solid">Show details</Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};

export default ProductCard;
