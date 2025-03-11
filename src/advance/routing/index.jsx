import React from "react";
import CenterContainer from "../components/CenterContainer";

// ROUTING # 1 SETUP install react-router
import {
  BrowserRouter,
  // createBrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { Button } from "@nextui-org/react";
import DashboardLayout from "./components/DashboardLayout";
import MenuPage from "./pages/MenuPage";
import MenuDetailPage from "./pages/MenuDetailPage";
import UserPage from "./pages/UsersPage";
import UserDetailPage from "./pages/UserDetailPage";

const LoginPage = (props) => {
  const navigate = useNavigate();
  return (
    <CenterContainer>
      <Button
        onPress={() => {
          localStorage.setItem("hasLogin", "true");
          navigate("/dashboard");
        }}
      >
        KLIK UNTUK LOGIN
      </Button>
    </CenterContainer>
  );
};

const RoutingIndex = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          errorElement={<div className="text-3xl">ERROR</div>}
          element={<CenterContainer>HOME</CenterContainer>}
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          }
          errorElement={<div className="text-3xl">ERROR</div>}
        >
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Outlet />
              </DashboardLayout>
            }
            errorElement={<div className="text-3xl">ERROR</div>}
          >
            <Route index element={<CenterContainer>Home</CenterContainer>} />
            <Route path="users" element={<UserPage />} />
            <Route path="users/:id" element={<UserDetailPage />} />
            <Route path="menus" element={<MenuPage />} />
            <Route path="menus/:id" element={<MenuDetailPage />} />
          </Route>
        </Route>
        <Route
          path="/"
          errorElement={<div className="text-3xl">ERROR</div>}
          element={
            <PublicRoute>
              <Outlet />
            </PublicRoute>
          }
        >
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route
          path="*"
          errorElement={<div className="text-3xl">ERROR</div>}
          element={<CenterContainer>PAGE NOT FOUND</CenterContainer>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingIndex;
