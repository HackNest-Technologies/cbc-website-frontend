import { useState } from "react";
import DefaultMenu from "./DefaultMenu";
import ExpandedMobileNav from "./ExpandedMobileNav";
const MobileNav = () => {
const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="relative md:hidden">
      {/* Regular Navigation (shown by default) */}
      {!isOpen && <DefaultMenu  toggleMenu={toggleMenu} />}

      {/* Expanded Menu */}
      {isOpen && <ExpandedMobileNav  toggleMenu={toggleMenu} />}
    </section>
  );
};

export default MobileNav