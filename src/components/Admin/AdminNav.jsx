import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/lagos-foodbank-logo.png";
// import blogIcon from "../../assets/images/blogIcon.png";
// import authorIcon from "../../assets/images/authorIcon.png";
// import galleryIcon from "../../assets/images/galleryIcon.png";
// import calender from "../../assets/images/calender.png";
import logo from "../../assets/images/cbc-logo.webp";
// import Dashboard from "./Dashboard";

const AdminNav = () => {
  const activeClass = ({ isActive }) =>
    isActive
      ? "bg-[#EAF4B3] py-3  rounded-[4px] px-4 w-full flex gap-3 text-sm font-inter font-semibold"
      : " flex gap-3 text-sm font-inter font-semibold py-4  px-4";

  return (
    <section className="border-r-[1.8px] border-[#E4E7EC] px-2 pt-6 w-[280px] shrink-0">
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
        <NavLink to="admin/live-stream" className={activeClass}>
          {/* <img src={blogIcon} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">Stream</p>
        </NavLink>

        <NavLink to="admin/past-sermon" className={activeClass}>
          {/* <img src={galleryIcon} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">Past Sermon</p>
        </NavLink>

        <NavLink to="admin/admin-events" className={activeClass}>
          {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">Event</p>
        </NavLink>

        <NavLink to="admin/store" className={activeClass}>
          {/* <img src={authorIcon} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">Store</p>
        </NavLink>

        <NavLink to="admin/convert" className={activeClass}>
          {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">New Convert</p>
        </NavLink>

        <NavLink to="admin/fellowship" className={activeClass}>
          {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">House Fellowship</p>
        </NavLink>

        <NavLink to="admin/devotional" className={activeClass}>
          {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">Devotional</p>
        </NavLink>

        <NavLink to="admin/branches" className={activeClass}>
          {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">Branches</p>
        </NavLink>

        <NavLink to="admin/department" className={activeClass}>
          {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">Departments</p>
        </NavLink>

        <NavLink to="admin/testimonies" className={activeClass}>
          {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
          <p className="">Testimonies</p>
        </NavLink>
      </div>

      <div className="flex items-end h-[55vh]">{/* <Dashboard/> */}</div>
    </section>
  );
};

export default AdminNav;
