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
import ErrorFallbackPage from "../routing/pages/ErrorFallbackPage";
import { ErrorBoundary } from "react-error-boundary";

import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CenterContainer>HOME</CenterContainer>,
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Outlet />
      </ProtectedRoute>
    ),
    // createBrowserRouter ini sudah punya ErrorBoundaries sendiri dan terintegrasi errorElement dengan,
    // jadi kita gak perlu pakai withErrorBoundaries, karena sudah masuk disini
    errorElement: <ErrorFallbackPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        ),
        children: [
          {
            index: true,
            element: <CenterContainer>Home</CenterContainer>,
          },
          {
            path: "users",
            element: <UserPage />,
          },
          {
            path: "users/:id",
            element: <UserDetailPage />,
          },
          {
            path: "menus",
            element: <MenuPage />,
          },
          {
            path: "menus/:id",
            element: <MenuDetailPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/",
    element: (
      <PublicRoute>
        <Outlet />
      </PublicRoute>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "*",
    element: <CenterContainer>PAGE NOT FOUND</CenterContainer>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
