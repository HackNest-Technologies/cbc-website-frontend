import { useSelector } from "react-redux";
import {
  CiLogout,
  CiShoppingCart,
  CiUser,
  CiMail,
  CiSettings,
} from "react-icons/ci";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { useLogoutMutation } from "../../redux/apiSlice";
import { clearUser } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiSlice } from "../../redux/apiSlice";
const BRAND = "#FD9F2B";
const UserWelcomeMsg = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logout, { isLoading }] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logout().unwrap(); // calls DELETE /session
      dispatch(apiSlice.util.resetApiState()); // 🔥 VERY IMPORTANT

      dispatch(clearUser()); // clears Redux state
      navigate("/login"); // redirect user
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FD9F2B] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: "Account Type",
      value: user.is_admin ? "Administrator" : "Standard User",
      icon: <MdOutlineAdminPanelSettings className="text-2xl" />,
      color: "bg-[#FD9F2B]/15 text-[#FD9F2B]",
    },
    {
      title: "Email Verified",
      value: "Verified",
      icon: <CiMail className="text-2xl" />,
      color: "bg-green-100 text-green-700",
    },
    
    {
      title: "Cart Status",
      value: user.cart ? `${user.cart.items?.length || 0} items` : "Empty",
      icon: <CiShoppingCart className="text-2xl" />,
      color: user.cart
        ? "bg-[#FD9F2B]/15 text-[#FD9F2B]"
        : "bg-gray-100 text-gray-700",
    },
  ];

  const quickActions = [
    {
      label: "Browse Store",
      icon: <MdOutlineShoppingBag />,
      action: () => (window.location.href = "/store"),
    },
  ];

  return (
    <section className="h-[100vh] w-full overflow-x-hidden px-[200px] pt-16">
      <div className="">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 pt-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Dashboard
          </h1>

          <button
            onClick={handleLogout}
            className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-[#FD9F2B] text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            <CiLogout className="text-lg" />
            Log Out
          </button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            {/* Welcome Card */}
            <div className="bg-gradient-to-r from-[#FD9F2B] to-[#FDB14A] rounded-2xl shadow-lg p-6 md:p-8 mb-6 text-white">
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Welcome back,{" "}
                    {user.first_name || user.email_address.split("@")[0]} 👋
                  </h2>
                  <p className="opacity-90 mb-4">
                    Let’s make today productive and impactful.
                  </p>
                  <div className="flex items-center gap-2">
                    <CiMail className="text-xl" />
                    <span className="font-medium">{user.email_address}</span>
                  </div>
                </div>

                <div className="mt-6 md:mt-0">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <CiUser className="text-4xl" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-5 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm text-gray-600">{stat.title}</p>
                    <p className="text-lg font-semibold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CiSettings />
                Quick Actions
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex flex-col items-center justify-center p-4 border rounded-lg hover:border-[#FD9F2B] hover:bg-[#FD9F2B]/10 transition"
                  >
                    <div className="p-3 rounded-full bg-gray-100 mb-3 text-[#FD9F2B]">
                      {action.icon}
                    </div>
                    <span className="text-sm font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {!user.cart && (
              <div className="bg-[#FD9F2B]/10 border border-[#FD9F2B]/30 rounded-xl p-5">
                <div className="flex gap-3">
                  <div className="p-2 bg-[#FD9F2B]/20 rounded-lg">
                    <CiShoppingCart className="text-xl text-[#FD9F2B]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Your cart is empty</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Start shopping to add items
                    </p>
                    <button className="px-4 py-2 bg-[#FD9F2B] text-white rounded-lg text-sm hover:opacity-90">
                      Browse Products
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="m-8 mb-20 bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Need Help?</h3>
            <p className="text-gray-600">
              Check our documentation or contact support.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              Help Center
            </button>
            <button className="px-4 py-2 bg-[#FD9F2B] text-white rounded-lg hover:opacity-90">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserWelcomeMsg;
