import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProtectedAdminRoute = ({ children }) => {
  const {userInfo} = useSelector(state => state.user);
  if (!userInfo) {
    return <Navigate to="/sign-in" />;
  }
  return children ? children : <Outlet />;
};

ProtectedAdminRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedAdminRoute;