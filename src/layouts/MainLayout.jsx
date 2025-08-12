import { Outlet } from "react-router-dom";
import Navbar from "../components/Home/Navbar";
import Footer from "../components/Footer/Footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      
    </>
  );
};

export default MainLayout;
