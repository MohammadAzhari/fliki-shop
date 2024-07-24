import { atom } from "jotai";
import { cartAtom } from "../atoms/cartAtom";
import { IProduct } from "../../models/Product";

const addItemToCart = atom(null, (get, set, data: { product: IProduct }) => {
  // check if there is an item with the same id in the cart
  const existingItem = get(cartAtom).find(
    (cartItem) => cartItem.product._id === data.product._id
  );
  if (existingItem) {
    // if yes, update the quantity
    const newCartItems = get(cartAtom).map((cartItem) =>
      cartItem.product._id === data.product._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    return set(cartAtom, newCartItems);
  }
  // if not, add the item
  set(cartAtom, [
    ...get(cartAtom),
    {
      product: data.product,
      quantity: 1,
    },
  ]);
});

const removeItemFromCart = atom(
  null,
  (get, set, data: { product: IProduct }) => {
    set(
      cartAtom,
      get(cartAtom).filter(
        (cartItem) => cartItem.product._id !== data.product._id
      )
    );
  }
);

const clearCart = atom(null, (get, set) => {
  set(cartAtom, []);
});

const changeQuantityOfItem = atom(
  null,
  (get, set, data: { product: IProduct; type: "increment" | "decrement" }) => {
    set(
      cartAtom,
      get(cartAtom).map((cartItem) =>
        cartItem.product._id === data.product._id
          ? {
              ...cartItem,
              quantity:
                data.type === "increment"
                  ? cartItem.quantity + 1
                  : cartItem.quantity - 1,
            }
          : cartItem
      )
    );
  }
);

export default {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  changeQuantityOfItem,
};
