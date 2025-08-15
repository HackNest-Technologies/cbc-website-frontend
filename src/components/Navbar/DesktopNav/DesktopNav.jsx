import logo from "../../../assets/images/cbc-logo.webp";
import { NavLink, Link } from "react-router-dom";
import DefaultMenu from "./DefaultMenu";
import ExpandedMenu from "./ExpandedMenu";
import { useState } from "react";

const DesktopNav = () => {
  const classLink = ({ isActive }) =>
    isActive
      ? "text-base border-b-[4px] pb-[9px] border-[#FD9F2B]"
      : "text-base hover:border-b-[4px] border-[#FD9F2B]";

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative hidden lg:block">
      {/* Regular Navigation (shown by default) */}
      {!isOpen && <DefaultMenu classLink={classLink} toggleMenu={toggleMenu} />}

      {/* Expanded Menu */}
      {isOpen && <ExpandedMenu classLink={classLink} toggleMenu={toggleMenu} />}
    </section>
  );
};

export default DesktopNav;
