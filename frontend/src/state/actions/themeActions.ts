import { atom } from "jotai";
import { themeAtom } from "../atoms/themeAtom";

const toggleColorMode = atom(null, (get, set) => {
  set(themeAtom, get(themeAtom) === "light" ? "dark" : "light");
});

export default {
  toggleColorMode,
};
