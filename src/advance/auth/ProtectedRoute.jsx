import React, { Children, useState } from "react";
import { Link, Navigate, Outlet, redirect } from "react-router";

const ProtectedRoute = (props) => {
  const [hasLogin] = useState(() => {
    const hasLoginValue = localStorage.getItem("access_token");
    return hasLoginValue;
  });

  // ROUTING # 5 konsep utamanya ada conditional, jika TIDAK login maka lempar ke halaman login
  if (!hasLogin) {
    return <Navigate to={"/login"} />;
  }
  // ROUTING # 5 kalau sudah authenticated atau sudah login maka ya boleh akses children routenya
  // else
  // return <Outlet />;
  // sama seperti diatas, karena children yang dimasukin adalah Outlet ya
  // dan bagusnya <Outlet /> untuk Authentication baiknya ditaruh di Routes.jsx atau Routes/index.jsx
  // supaya informasinya jelas bahwa yang di protect adalah si Outletnya

  // nah tapi kalau kasus lain, itu bisa ditaruh component layoutnya atau page componentnya
  return props.children;
};

export default ProtectedRoute;
