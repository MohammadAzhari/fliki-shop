import { BackpackIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Flex } from "@radix-ui/themes";

const Navbar = () => {
  return (
    <Flex
      direction="row"
      px={"4"}
      justify={"between"}
      display={"flex"}
      align={"center"}
      className="border-b border-b-1"
      gap="4"
      pb="2"
    >
      <Flex gap="4" align={"center"}>
        <Box>
          <Avatar fallback="FS" />
        </Box>
        <Box>Fliki Shop</Box>
      </Flex>
      <Box position={"relative"}>
        <BackpackIcon height={22} width={22} />
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {5}
        </span>
      </Box>
    </Flex>
  );
};

export default Navbar;
