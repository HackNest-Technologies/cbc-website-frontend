import { Outlet } from "react-router-dom";
import MainNav from "../components/Navbar/MainNav";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../utils/ScrollToTop";
const MainLayout = () => {
  return (
    <>
    <ScrollToTop/>
      <MainNav />
      <Outlet />
      <Footer />
      
    </>
  );
};

export default MainLayout;
