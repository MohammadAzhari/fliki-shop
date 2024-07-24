import { atomWithStorage } from "jotai/utils";

const themeAtom = atomWithStorage<"light" | "dark">("theme", "light");

export default themeAtom;
