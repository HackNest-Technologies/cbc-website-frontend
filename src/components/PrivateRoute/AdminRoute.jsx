import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "../../redux/apiSlice";

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isFetching } = useCurrentUserQuery();

  // Wait for backend authentication check before deciding
  if (isLoading || isFetching) {
    return <div>Checking authentication...</div>;
  }

  if (!user) return <Navigate to="/login" replace />;
  if (!user.is_admin) return <Navigate to="/login" replace />;

  return children;
};

export default AdminRoute;
