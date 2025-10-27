import logo from "../../../assets/images/cbc-logo.webp";
import { NavLink, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import NavListMobile from "./NavListMobile";

const ExpandedMobileNav = ({ toggleMenu }) => {
  return (
    <div className="w-full fixed top-0 left-0 h-full  z-[9999] overflow-y-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 393 1597"
        fill="none"
      >
        <path d="M0 0H395V1439.54L0 1597V0Z" fill="black" />
      </svg>
      <header className="absolute top-0 right-0 left-0  my-8">
        <section className="px-6 flex justify-between items-center">
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
              className="w-[106px] flex items-center gap-2.5  h-[48px] px-[16px] bg-white rounded-[50px] text-black"
            >
              <IoClose />

              <button className="text-base">Close</button>
            </li>
          </ul>
        </section>
        <div className="px-6 pt-8 flex gap-[120px] font-satoshi list-none text-white ">
          <div>
            <p onClick={toggleMenu} className="text-xl leading-4 py-[14px] uppercase">
              <NavLink to="/">Home</NavLink>
            </p>
            <p onClick={toggleMenu} className="text-xl leading-4 py-[14px] uppercase">
              <NavLink to="/events">Events</NavLink>
            </p>
            <p onClick={toggleMenu} className="text-xl leading-4 py-[14px] uppercase">
              <NavLink to="/store">Store</NavLink>
            </p>
          </div>

          <div>
          <p onClick={toggleMenu} className="text-xl leading-4 py-[14px] uppercase">
            <NavLink to="/about">About</NavLink>
          </p>
          <p onClick={toggleMenu} className="text-xl leading-4 py-[14px] uppercase ">
            <NavLink to="/give">Give</NavLink>
          </p>
          </div>

        </div>

        <section className="absolute top-[200px] text-white right-0 left-0">
          <NavListMobile />
        </section>
      </header>
    </div>
  );
};

export default ExpandedMobileNav;
