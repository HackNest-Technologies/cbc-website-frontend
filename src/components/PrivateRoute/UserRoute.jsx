import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "../../redux/apiSlice";
const UserRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useCurrentUserQuery();

  if (isLoading) return <div>Checking authentication...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.is_admin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default UserRoute;
