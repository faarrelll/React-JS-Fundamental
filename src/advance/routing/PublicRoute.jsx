import React, { useState } from "react";
import { Navigate } from "react-router";

const PublicRoute = (props) => {
  const [hasLogin] = useState(() => {
    const hasLoginValue = localStorage.getItem("hasLogin");
    return hasLoginValue;
  });

  console.log("hasLogin", hasLogin);

  if (hasLogin) {
    return <Navigate to={"/dashboard"} />;
  }
  // else (belum login)
  return props.children;
};

export default PublicRoute;
