import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return auth ? (
    React.cloneElement(children, { ...rest })
  ) : (
    <Navigate replace to="/login" />
  );
};

export default PrivateRoute;
