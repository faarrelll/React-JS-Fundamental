import React from "react";
import CenterContainer from "../components/CenterContainer";

// ROUTING # 1 SETUP install react-router
import {
  BrowserRouter,
  // createBrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "./components/DashboardLayout";
import MenuPage from "./pages/MenuPage";
import MenuDetailPage from "./pages/MenuDetailPage";
import UserPage from "./pages/UsersPage";
import UserDetailPage from "./pages/UserDetailPage";
import LoginPage from "./pages/LoginPage";
import ErrorBoundariesFallbackPage from "../routing/pages/ErrorBoundariesFallbackPage";
import { div } from "framer-motion/client";

import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "sonner";
const RoutingIndex = () => {
  return (
    <ErrorBoundary fallback={<ErrorBoundariesFallbackPage />}>
      <Toaster position="bottom-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CenterContainer>HOME</CenterContainer>} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Outlet />
              </ProtectedRoute>
            }
          >
            <Route
              path="/dashboard"
              elementError={
                <div>
                  Sebagai fallback ketika pada saat proses routing di{" "}
                  {"<BrowserRouter>"}
                </div>
              }
              element={
                <DashboardLayout>
                  <Outlet />
                </DashboardLayout>
              }
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
            element={<CenterContainer>PAGE NOT FOUND</CenterContainer>}
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default RoutingIndex;
