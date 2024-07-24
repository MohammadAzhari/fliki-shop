import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Button,
  Flex,
  IconButton,
  Table,
  Text,
} from "@radix-ui/themes";
import { IProduct } from "../../models/Product";
import { useAtom } from "jotai";
import cartActions from "../../state/actions/cartActions";

const CartItemRow = (props: {
  item: { product: IProduct; quantity: number };
}) => {
  const [, changeQuantityOfItem] = useAtom(cartActions.changeQuantityOfItem);
  const [, removeItemFromCart] = useAtom(cartActions.removeItemFromCart);

  const handleClickRemoveItemFromCart = (product: IProduct) => {
    removeItemFromCart({ product });
  };

  const handleClickChangeQuantityOfItem = (
    product: IProduct,
    type: "increment" | "decrement"
  ) => {
    changeQuantityOfItem({ product: product, type: type });
  };

  return (
    <Table.Row align="center">
      <Table.RowHeaderCell>{props.item.product.name}</Table.RowHeaderCell>
      <Table.Cell>{props.item.product.price}$</Table.Cell>
      <Table.Cell>
        <Flex align="center" gap={"2"}>
          <IconButton
            onClick={() =>
              handleClickChangeQuantityOfItem(props.item.product, "decrement")
            }
            variant="ghost"
            size="2"
          >
            <MinusIcon />
          </IconButton>
          <Text>{props.item.quantity}</Text>
          <IconButton
            onClick={() =>
              handleClickChangeQuantityOfItem(props.item.product, "increment")
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
              Are you sure do you want to remove this item from the cart?
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
                    handleClickRemoveItemFromCart(props.item.product)
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
  );
};

export default CartItemRow;
