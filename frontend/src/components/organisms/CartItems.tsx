import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Button,
  Flex,
  IconButton,
  Table,
  Text,
} from "@radix-ui/themes";
import { useAtom, useAtomValue } from "jotai";
import { cartAtom, totalPriceAtom } from "../../state/atoms/cartAtom";
import cartActions from "../../state/actions/cartActions";
import { IProduct } from "../../models/Product";
import CheckoutButton from "../molecules/CheckoutButton";

const CartItems = () => {
  const cartItems = useAtomValue(cartAtom);
  const totalPrice = useAtomValue(totalPriceAtom);
  const [, changeQuantityOfItem] = useAtom(cartActions.changeQuantityOfItem);
  const [, removeItemFromCart] = useAtom(cartActions.removeItemFromCart);

  const handleClickRemoveItemFromCart = (product: IProduct) => {
    removeItemFromCart({ product: product });
  };

  const handleClickChangeQuantityOfItem = (
    product: IProduct,
    type: "increment" | "decrement"
  ) => {
    changeQuantityOfItem({ product: product, type: type });
  };

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
              <Table.Row key={item.product._id} align="center">
                <Table.RowHeaderCell>{item.product.name}</Table.RowHeaderCell>
                <Table.Cell>{item.product.price}$</Table.Cell>
                <Table.Cell>
                  <Flex align="center" gap={"2"}>
                    <IconButton
                      onClick={() =>
                        handleClickChangeQuantityOfItem(
                          item.product,
                          "decrement"
                        )
                      }
                      variant="ghost"
                      size="2"
                    >
                      <MinusIcon />
                    </IconButton>
                    <Text>{item.quantity}</Text>
                    <IconButton
                      onClick={() =>
                        handleClickChangeQuantityOfItem(
                          item.product,
                          "increment"
                        )
                      }
                      variant="ghost"
                      size="2"
                    >
                      <PlusIcon />
                    </IconButton>
                  </Flex>
                </Table.Cell>
                <Table.Cell>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger>
                      <Button variant="outline" color="red" size="1">
                        <TrashIcon />
                      </Button>
                    </AlertDialog.Trigger>
                    <AlertDialog.Content maxWidth="450px">
                      <AlertDialog.Title>Remove from cart</AlertDialog.Title>
                      <AlertDialog.Description size="2">
                        Are you sure do you want to remove this item from the
                        cart?
                      </AlertDialog.Description>

                      <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                          <Button variant="soft" color="gray">
                            Cancel
                          </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                          <Button
                            onClick={() =>
                              handleClickRemoveItemFromCart(item.product)
                            }
                            variant="solid"
                            color="red"
                          >
                            Remove from cart
                          </Button>
                        </AlertDialog.Action>
                      </Flex>
                    </AlertDialog.Content>
                  </AlertDialog.Root>
                </Table.Cell>
              </Table.Row>
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
