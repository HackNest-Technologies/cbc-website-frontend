import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiSlice } from "../../redux/apiSlice";

import { CiLogout, CiShoppingCart, CiMail, CiSettings } from "react-icons/ci";

import {
  MdOutlineAdminPanelSettings,
  MdOutlineHelpOutline,
  MdOutlineDashboard,
  MdOutlineStore,
  MdOutlineSecurity,
  MdOutlineBarChart,
} from "react-icons/md";

import { FiUsers, FiUser } from "react-icons/fi";

import { clearUser } from "../../redux/authSlice";
import { useLogoutMutation } from "../../redux/apiSlice";

const BRAND = "#FD9F2B";

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = async () => {
    try {
      await logout().unwrap(); // DELETE /session
      dispatch(apiSlice.util.resetApiState()); 

      navigate("/login", { replace: true });
      dispatch(clearUser()); // clear redux
      navigate("/login"); // redirect
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FD9F2B] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  const adminStats = [
    { title: "Products", value: "48", icon: <MdOutlineStore />, change: "+5%" },
    {
      title: "Orders Today",
      value: "23",
      icon: <CiShoppingCart />,
      change: "+8%",
    },
    {
      title: "Revenue",
      value: "₦ 2.4M",
      icon: <MdOutlineBarChart />,
      change: "+15%",
    },
  ];

  return (
    <>
      {/* LOGOUT MODAL */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-[#FD9F2B]/20 flex items-center justify-center">
              <CiLogout className="text-xl text-[#FD9F2B]" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Log out?</h3>
            <p className="text-gray-600 mb-6">
              You'll need to sign in again to access the admin panel.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 border rounded-lg py-2 hover:bg-gray-50"
                disabled={isLoggingOut}
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex-1 bg-[#FD9F2B] text-white rounded-lg py-2 hover:bg-[#e88f26]"
              >
                {isLoggingOut ? "Logging out..." : "Yes, Log out"}
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="h-[100vh] w-full overflow-x-hidden px-[200px] pt-16">
        <div className="">
          {/* HEADER */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <MdOutlineDashboard className="text-[#FD9F2B]" />
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your platform and users
              </p>
            </div>

            <button
              onClick={() => setShowLogoutConfirm(true)}
              className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-[#FD9F2B] text-white rounded-lg hover:bg-[#e88f26]"
            >
              <CiLogout />
              Log Out
            </button>
          </header>

          {/* WELCOME */}
          <div className="bg-gradient-to-r from-[#FD9F2B] to-[#ffb24d] text-white rounded-2xl p-6 mb-6 shadow">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  Welcome back,{" "}
                  {user.first_name || user.email_address.split("@")[0]} 👑
                </h2>
                <p className="opacity-90 mt-1">Administrator access enabled</p>
                <div className="flex items-center gap-2 mt-3 text-sm">
                  <CiMail />
                  {user.email_address}
                </div>
              </div>
              <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                <MdOutlineAdminPanelSettings className="text-3xl" />
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {adminStats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                    <span className="text-xs text-green-600">
                      {stat.change} this week
                    </span>
                  </div>
                  <div className="p-3 rounded-full bg-[#FD9F2B]/15 text-[#FD9F2B] text-xl">
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PROFILE */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <MdOutlineSecurity className="text-[#FD9F2B]" />
              Admin Profile
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <CiMail />
                <span>{user.email_address}</span>
              </div>
              <div className="flex gap-3 text-[#FD9F2B] font-medium">
                <MdOutlineAdminPanelSettings />
                Administrator
              </div>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="mt-8 bg-gray-900 text-white rounded-xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <MdOutlineHelpOutline className="text-[#FD9F2B]" />
                  Admin Support
                </h3>
                <p className="text-gray-300 mt-1">
                  Need help managing the platform?
                </p>
              </div>
              <button className="bg-[#FD9F2B] text-black px-4 py-2 rounded-lg hover:bg-[#e88f26]">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
