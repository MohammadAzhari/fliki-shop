import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import {
  AlertDialog,
  Button,
  Flex,
  IconButton,
  Table,
  Text,
} from "@radix-ui/themes";

const CartItems = () => {
  return (
    <Flex
      gap="3"
      m="5"
      wrap="wrap"
      direction="column"
      align="center"
      justify="between"
    >
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
          <Table.Row align="center">
            <Table.RowHeaderCell>Danilo Sousa.</Table.RowHeaderCell>
            <Table.Cell>220$</Table.Cell>
            <Table.Cell>
              <Flex align="center" gap={"2"}>
                <IconButton variant="ghost" size="2">
                  <MinusIcon />
                </IconButton>
                <Text>5</Text>
                <IconButton variant="ghost" size="2">
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
                      <Button variant="solid" color="red">
                        Revoke from cart
                      </Button>
                    </AlertDialog.Action>
                  </Flex>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
      <Flex
        position="fixed"
        bottom="5"
        gap="3"
        width="100%"
        justify="center"
        className="border-t border-t-1"
        pt="4"
      >
        <Button size="3" variant="outline">
          Buy now
        </Button>
      </Flex>
    </Flex>
  );
};

export default CartItems;
