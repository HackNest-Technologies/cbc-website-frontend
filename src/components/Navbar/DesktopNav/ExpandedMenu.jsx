import logo from "../../../assets/images/cbc-logo.webp";
import { NavLink, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import NavList from "./NavList";

const ExpandedMenu = ({ classLink, toggleMenu }) => {
  return (
    <div className="w-full fixed top-0 left-0 z-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1512"
        height="824"
        viewBox="0 0 1512 824"
        fill="none"
      >
        <path d="M-6 0H1514V742.756L-6 824V0Z" fill="black" />
      </svg>
      <header className="absolute top-0 right-0 left-0  my-8">
        <section className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4 justify-center items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Calvary bible church logo"
                className="w-[110px] h-auto object-cover"
              />
            </Link>
          </div>
          <ul className="list-none font-inter flex justify-between items-center h-[50px] w-[732px] bg-white rounded-[50px] pl-[45px] pr-[8px] py-[15px]">
            <li className="text-base text-center leading-4 py-[10px] w-[57px]">
              <NavLink to="/" className={classLink}>
                Home
              </NavLink>
            </li>
            <li className="text-base text-center leading-4 py-[10px] w-[57px]">
              <NavLink to="#" className={classLink}>
                About
              </NavLink>
            </li>
            <li className="text-base text-center leading-4 py-[10px] w-[57px]">
              <NavLink to="#" className={classLink}>
                Events
              </NavLink>
            </li>
            <li className="text-base text-center leading-4 py-[10px] w-[57px]">
              <NavLink to="#" className={classLink}>
                Give
              </NavLink>
            </li>
            <li className="text-base text-center leading-4 py-[10px] w-[57px]">
              <NavLink to="#" className={classLink}>
                Store
              </NavLink>
            </li>
            <li
              onClick={toggleMenu}
              className="w-[123px] flex items-center gap-2.5 h-[35px] pr-[25px] pl-[16px] bg-black rounded-[50px] text-white"
            >
              <IoClose />

           <button className="text-base">Close</button>
            </li>
          </ul>
        </section>
        <section className="absolute top-[120px] text-white right-0 left-0">
          <NavList />
        </section>
      </header>
    </div>
  );
};

export default ExpandedMenu;
