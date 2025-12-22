import { NavLink } from "react-router-dom";
import logo from "../../assets/images/cbc-logo.webp";

const UserNav = () => {
  const activeClass = ({ isActive }) =>
    isActive
      ? "bg-[#FD9F2B] py-3  text-white rounded-[4px] px-4 w-full flex gap-3 text-sm font-inter font-semibold"
      : " flex gap-3 text-sm  font-inter font-semibold py-4  px-4";

  return (
    <section className="h-[100vh] border-r-[1.8px] border-[#E4E7EC] px-2 pt-6 w-[280px]  shrink-0 overflow-hidden">
      <div className="flex gap-4 justify-center items-center">
        <NavLink to="/">
          <img
            src={logo}
            alt="Calvary bible church logo"
            className="w-[110px] h-auto object-cover"
          />
        </NavLink>
      </div>
      <div className="mt-12">
        <NavLink to="/user" className={activeClass}>
          <p className="">Dashboard</p>
        </NavLink>
      </div>

     
    </section>
  );
};

export default UserNav;
