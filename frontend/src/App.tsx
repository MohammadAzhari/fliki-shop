import { Theme } from "@radix-ui/themes";
import AppRoutes from "./routes";
import themeAtom from "./state/atoms/themeAtom";
import { useAtomValue } from "jotai";

function App() {
  const theme = useAtomValue(themeAtom);

  return (
    <Theme accentColor="yellow" appearance={theme}>
      <AppRoutes />
    </Theme>
  );
}

export default App;
