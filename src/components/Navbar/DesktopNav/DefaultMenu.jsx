import { useState, useEffect } from "react";
import logo from "../../../assets/images/cbc-logo.webp";
import { NavLink, Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const DefaultMenu = ({ classLink, toggleMenu }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled beyond a certain point (e.g., 20px)
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-[9999] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
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
        <ul className={`list-none font-inter flex justify-between items-center h-[50px] w-[732px] rounded-[50px] pl-[45px] pr-[8px] py-[15px] ${isScrolled ? 'bg-gray-100' : 'bg-white'}`}>
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/" className={classLink}>
              Home
            </NavLink>
          </li>
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/about" className={classLink}>
              About
            </NavLink>
          </li>
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/events" className={classLink}>
              Events
            </NavLink>
          </li>
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/give" className={classLink}>
              Give
            </NavLink>
          </li>
          <li className="text-base text-center leading-4 py-[10px] w-[57px]">
            <NavLink to="/store" className={classLink}>
              Store
            </NavLink>
          </li>

          <li onClick={toggleMenu} className="w-[123px] flex items-center gap-2.5 h-[35px] pr-[25px] pl-[16px] bg-black rounded-[50px] text-white cursor-pointer">
            <IoMenuSharp />
            <button className="text-base">Menu</button>
          </li>
        </ul>
      </section>
    </header>
  );
};

export default DefaultMenu;
