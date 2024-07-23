import { Routes, Route } from "react-router-dom";
import ProductList from "./components/organisms/ProductList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
    </Routes>
  );
}
