import React from "react";
import { getTokenInLs } from "../../util";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ path, element }) => {
  let tempToken = getTokenInLs();

  return tempToken ? <Outlet /> : <Navigate to={"/signin"} />;
};

export default PrivateRoute;
