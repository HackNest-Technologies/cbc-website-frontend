import { Outlet } from "react-router-dom";
import UserNav from "../components/User/UserNav";
import UserWelcomeMsg from "../components/User/UserWelcomeMsg";

const UserLayout = () => {
  return (
    <section className="lg:flex overflow-hidden">
      <UserNav />
      <Outlet />
      <UserWelcomeMsg />
    </section>
  );
};

export default UserLayout;
