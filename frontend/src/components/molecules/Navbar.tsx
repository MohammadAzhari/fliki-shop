import { BackpackIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Flex, IconButton } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { themeAtom } from "../../state/atoms/themeAtom";
import { useAtom, useAtomValue } from "jotai";
import themeActions from "../../state/actions/themeActions";
import { cartItemsCountAtom } from "../../state/atoms/cartAtom";

const Navbar = () => {
  const theme = useAtomValue(themeAtom);
  const cartItemsCount = useAtomValue(cartItemsCountAtom);
  const [, toggleColorMode] = useAtom(themeActions.toggleColorMode);

  return (
    <Flex
      direction="row"
      px="4"
      justify="between"
      display="flex"
      align="center"
      className="border-b border-b-1"
      gap="4"
      pb="2"
    >
      <Flex gap="4" align="center">
        <Link to={"/"}>
          <Box>
            <Avatar fallback="FS" />
          </Box>
        </Link>
        <Box>Fliki Shop</Box>
      </Flex>
      <Flex gap="5" align="center">
        <IconButton onClick={toggleColorMode} variant="ghost">
          {theme === "light" ? (
            <MoonIcon color="black" height={22} width={22} />
          ) : (
            <SunIcon height={22} width={22} />
          )}
        </IconButton>
        <Link to={"/cart"}>
          <Box position={"relative"} className="cursor-pointer">
            <BackpackIcon height={22} width={22} />
            {cartItemsCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                {cartItemsCount}
              </span>
            )}
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
