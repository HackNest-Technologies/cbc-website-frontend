import logo from "../../../assets/images/cbc-logo.webp";
import { NavLink, Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const DefaultMenu = ({ classLink, toggleMenu }) => {
  return (
    <header className="fixed w-full top-0 z-[100]">
      <section className="container mx-auto my-4 flex justify-between items-center h-[104px]">
        <div className="flex gap-4 justify-center items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Calvary bible church logo"
                className="w-[110px] h-auto object-cover"
            />
          </Link>
        </div>
          <ul className="list-none flex justify-between items-center h-[50px] w-[732px] bg-white rounded-[50px]">
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/" className={classLink}>
              Home
            </NavLink>
          </li>
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/" className={classLink}>
              About
            </NavLink>
          </li>
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/" className={classLink}>
              EVents
            </NavLink>
          </li>
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/" className={classLink}>
              Give
            </NavLink>
          </li>
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/" className={classLink}>
              Store
            </NavLink>
          </li>

          <li  onClick={toggleMenu} className="w-[123px] flex items-center gap-2.5 h-[35px] pr-[25px] pl-[16px] bg-black rounded-[50px] text-white">
            <IoMenuSharp />

            <button className="text-base">Menu</button>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default DefaultMenu;
