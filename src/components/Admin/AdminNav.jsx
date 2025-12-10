// import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/cbc-logo.webp";

// const Nav = () => {
//   const activeClass = ({ isActive }) =>
//     isActive
//       ? "bg-[#FD9F2B] py-3  text-white rounded-[4px] px-4 w-full flex gap-3 text-sm font-inter font-semibold"
//       : " flex gap-3 text-sm  font-inter font-semibold py-4  px-4";

//   return (
//     <section className="border-r-[1.8px] border-[#E4E7EC] px-2 pt-6 w-[280px] shrink-0">
//       <div className="flex gap-4 justify-center items-center">
//         <NavLink to="/">
//           <img
//             src={logo}
//             alt="Calvary bible church logo"
//             className="w-[110px] h-auto object-cover"
//           />
//         </NavLink>
//       </div>
//       <div className="mt-12">
//         <NavLink to="/admin-livestream" className={activeClass}>
//           {/* <img src={blogIcon} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">Stream</p>
//         </NavLink>

//         <NavLink to="/admin-pastsermon" className={activeClass}>
//           {/* <img src={galleryIcon} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">Past Sermon</p>
//         </NavLink>

//         <NavLink to="/admin-events" className={activeClass}>
//           {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">Event</p>
//         </NavLink>

//         <NavLink to="/admin-store" className={activeClass}>
//           {/* <img src={authorIcon} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">Store</p>
//         </NavLink>

//         <NavLink to="/admin-convert" className={activeClass}>
//           {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">New Convert</p>
//         </NavLink>

//         <NavLink to="/admin-fellowship" className={activeClass}>
//           {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">House Fellowship</p>
//         </NavLink>

//         <NavLink to="/admin-devotional" className={activeClass}>
//           {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">Devotional</p>
//         </NavLink>

//         <NavLink to="/admin-branches" className={activeClass}>
//           {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">Branches</p>
//         </NavLink>

//         <NavLink to="/admin-department" className={activeClass}>
//           {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">Departments</p>
//         </NavLink>

//         <NavLink to="/admin-testimonies" className={activeClass}>
//           {/* <img src={calender} alt="" className="w-[20px] h-[20px]" /> */}
//           <p className="">Testimonies</p>
//         </NavLink>
//       </div>

//       <div className="flex items-end h-[55vh]">{/* <Dashboard/> */}</div>
//     </section>
//   );
// };

// export default Nav;



import { NavLink } from "react-router-dom";
import logo from "../../assets/images/cbc-logo.webp";
import { useState } from "react";
import { FiMenu, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const AdminNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const activeClass = ({ isActive }) =>
    isActive
      ? "bg-[#FD9F2B] text-white rounded-lg px-4 py-3 flex items-center gap-3 text-sm font-inter font-semibold transition-colors"
      : "flex items-center gap-3 text-sm font-inter font-semibold py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { to: "/admin-livestream", label: "Stream" },
    { to: "/admin-pastsermon", label: "Past Sermon" },
    { to: "/admin-events", label: "Event" },
    { to: "/admin-store", label: "Store" },
    { to: "/admin-convert", label: "New Convert" },
    { to: "/admin-fellowship", label: "House Fellowship" },
    { to: "/admin-devotional", label: "Devotional" },
    { to: "/admin-branches", label: "Branches" },
    { to: "/admin-department", label: "Departments" },
    { to: "/admin-testimonies", label: "Testimonies" },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#FD9F2B] text-white rounded-lg shadow-lg"
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <section
        className={`
          fixed lg:sticky top-0 left-0 h-screen 
          bg-white border-r border-[#E4E7EC] 
          transition-all duration-300 ease-in-out
          z-40
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          ${isCollapsed ? "lg:w-[80px]" : "lg:w-[280px]"}
          lg:translate-x-0
        `}
      >
        {/* Logo and Collapse Button */}
        <div className="p-4 border-b border-[#E4E7EC]">
          <div className={`flex items-center justify-between ${isCollapsed ? "flex-col gap-4" : ""}`}>
            <NavLink 
              to="/" 
              className={`${isCollapsed ? "flex justify-center w-full" : ""}`}
            >
              <img
                src={logo}
                alt="Calvary bible church logo"
                className={`${isCollapsed ? "w-12 h-12" : "w-[110px] h-auto"} object-cover transition-all`}
              />
            </NavLink>
            
            {/* Desktop Collapse Button */}
            <button
              onClick={toggleSidebar}
              className="hidden lg:flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              {isCollapsed ? (
                <FiChevronRight size={20} className="text-gray-600" />
              ) : (
                <FiChevronLeft size={20} className="text-gray-600" />
              )}
            </button>

            {/* Mobile Close Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            >
              <FiX size={20} className="text-gray-600" />
            </button> 
          </div>
        </div>

        {/* Navigation Items */}
        <div className="mt-8 px-3 overflow-y-auto  h-[calc(100vh-140px)]">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={activeClass}
              onClick={() => setIsMobileMenuOpen(false)}
              title={isCollapsed ? item.label : ""}
            >
              {/* You can add icons here later */}
              {!isCollapsed && <p>{item.label}</p>}
              {isCollapsed && (
                <span className="w-6 h-6 flex items-center justify-center text-xs font-medium">
                  {item.label.charAt(0)}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* User Profile/Logout Section */}
        <div className={`
          absolute bottom-0 left-0 right-0 
          p-4 border-t border-[#E4E7EC]
          ${isCollapsed ? "text-center" : ""}
        `}>
          <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
            {!isCollapsed && (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium text-gray-800">Admin</p>
                  <p className="text-xs text-gray-500">admin@church.com</p>
                </div>
              </div>
            )}
            
            {isCollapsed && (
              <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto"></div>
            )}
            
            <button 
              className={`
                text-sm text-gray-500 hover:text-gray-800
                ${isCollapsed ? "mt-2" : ""}
              `}
            >
              {!isCollapsed && "Logout"}
              {isCollapsed && <FiX size={20} />}
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Spacer for Desktop */}
      {!isMobileMenuOpen && !isCollapsed && (
        <div className="hidden lg:block " />
      )}
      {!isMobileMenuOpen && isCollapsed && (
        <div className="hidden lg:block  " />
      )}
    </>
  );
};

export default AdminNav;
