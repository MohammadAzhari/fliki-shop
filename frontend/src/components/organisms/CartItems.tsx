import { Flex, Table, Text } from "@radix-ui/themes";
import { useAtomValue } from "jotai";
import { cartAtom, totalPriceAtom } from "../../state/atoms/cartAtom";
import CheckoutButton from "../molecules/CheckoutButton";
import CartItemRow from "../molecules/CartItemRow";

const CartItems = () => {
  const cartItems = useAtomValue(cartAtom);
  const totalPrice = useAtomValue(totalPriceAtom);

  return (
    <Flex
      gap="3"
      m="5"
      wrap="wrap"
      direction="column"
      align="center"
      justify="between"
    >
      {cartItems.length > 0 && (
        <Table.Root size="3" variant="ghost">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Product Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Qunatity</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell></Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {cartItems.map((item) => (
              <CartItemRow key={item.product._id} item={item} />
            ))}
          </Table.Body>
        </Table.Root>
      )}
      <Flex mt="3" width="100%" justify="center">
        <Text size="4">
          Total Price: <strong>{totalPrice}$</strong>
        </Text>
      </Flex>
      <Flex
        position="fixed"
        bottom="5"
        gap="3"
        width="100%"
        justify="center"
        className="border-t border-t-1"
        pt="4"
      >
        <CheckoutButton />
      </Flex>
    </Flex>
  );
};

export default CartItems;
