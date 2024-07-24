import { atomWithStorage } from "jotai/utils";
import { ICartItem } from "../../models/Product";
import { atom } from "jotai";

const cartAtom = atomWithStorage<ICartItem[]>("cartItems", []);
export const cartItemsCountAtom = atom((get) => get(cartAtom).length);

export default cartAtom;
