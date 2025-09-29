import logo from "../../../assets/images/cbc-logo.webp";
import { NavLink, Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const DefaultMenu = ({ toggleMenu }) => {
  return (
    <header className="fixed w-full top-0 z-[1000]">
      <section className="px-6 my-4 flex justify-between items-center h-[80px]">
        <div className="flex gap-4 justify-center items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Calvary bible church logo"
              className="w-[60px] h-auto object-cover"
            />
          </Link>
        </div>
        <ul>
          <li
            onClick={toggleMenu}
            className="w-[106px] flex items-center gap-2.5  h-[48px] px-[16px] bg-black rounded-[50px] text-white">
            <IoMenuSharp />
            <button className="text-base">Menu</button>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default DefaultMenu;
