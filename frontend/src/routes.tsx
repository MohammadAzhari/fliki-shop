import { HashRouter, Route } from "react-router-dom";
import ProductList from "./components/organisms/ProductList";
import MainLayout from "./layouts/MainLayout";
import ProductDetails from "./components/organisms/ProductDetails";
import CartItems from "./components/organisms/CartItems";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Route element={<MainLayout />}>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartItems />} />
      </Route>
    </HashRouter>
  );
}
