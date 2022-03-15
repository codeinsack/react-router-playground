import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ authenticated, redirectTo, ...rest }) => {
  if (!authenticated) {
    return <Navigate to={redirectTo} />;
  }
  return <Route {...rest} />;
};

export default ProtectedRoute;
