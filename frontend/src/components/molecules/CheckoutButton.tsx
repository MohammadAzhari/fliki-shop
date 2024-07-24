import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import useAddOrder from "../../hooks/useAddOrder";
import ErrorCallout from "../atoms/ErrorCallout";
import SuccessCallout from "../atoms/SuccessCallout";
import { cartItemsCountAtom } from "../../state/atoms/cartAtom";
import { useAtomValue } from "jotai";

const CheckoutButton = () => {
  const { addOrder, error, isLoading, success } = useAddOrder();
  const cartItemsCount = useAtomValue(cartItemsCountAtom);

  if (error) {
    return <ErrorCallout message={error} />;
  }

  if (success) {
    return <SuccessCallout message="Order created successfully" />;
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          disabled={cartItemsCount === 0}
          loading={isLoading}
          size="3"
          variant="outline"
        >
          Checkout Now
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>Checkout Now</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Are you sure do you want to checkout now?
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={addOrder} loading={isLoading} variant="solid">
              Checkout
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};

export default CheckoutButton;
