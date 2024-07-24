import { atomWithStorage } from "jotai/utils";
import { ICartItem } from "../../models/Product";
import { atom } from "jotai";

export const cartAtom = atomWithStorage<ICartItem[]>("cartItems", []);
export const cartItemsCountAtom = atom((get) => get(cartAtom).length);
export const totalPriceAtom = atom((get) => {
  return get(cartAtom)
    .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    .toFixed(2);
});
