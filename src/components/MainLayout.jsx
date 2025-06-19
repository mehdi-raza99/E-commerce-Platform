import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
