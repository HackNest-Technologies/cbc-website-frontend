import { Outlet } from "react-router-dom";
import MainNav from "../components/Navbar/MainNav";
import Footer from "../components/Footer/Footer";
const MainLayout = () => {
  return (
    <>
      <MainNav />
      <Outlet />
      <Footer />
      
    </>
  );
};

export default MainLayout;
