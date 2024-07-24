import { Container } from "@radix-ui/themes";

import { Outlet } from "react-router-dom";
import Navbar from "../components/molecules/Navbar";

const MainLayout = () => {
  return (
    <Container pt={"4"}>
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
