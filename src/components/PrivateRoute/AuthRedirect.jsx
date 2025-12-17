import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useCurrentUserQuery } from "../../redux/apiSlice";

const AuthRedirect = () => {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isFetching } = useCurrentUserQuery();

  if (isLoading || isFetching) {
    return <div>Checking authentication...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔴 Admin users
  if (user.is_admin) {
    return <Navigate to="/admin" replace />;
  }

  // 🟢 Normal users
  return <Navigate to="/dashboard" replace />;
};

export default AuthRedirect;
