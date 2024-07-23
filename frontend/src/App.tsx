import { Container } from "@radix-ui/themes";
import Navbar from "./components/molecules/Navbar";
import ProductList from "./components/organisms/ProductList";
import AppRoutes from "./routes";

function App() {
  return (
    <Container pt={"4"}>
      <Navbar />
      <AppRoutes />
    </Container>
  );
}

export default App;
