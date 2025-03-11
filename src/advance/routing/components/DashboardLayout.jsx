import { NavLink, Outlet, useNavigate } from "react-router";
import { classNames } from "../utils";
import { Button } from "@nextui-org/react";

const navigationClassName = ({ isActive }) =>
  classNames(
    isActive
      ? "bg-gray-900 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white",
    "block rounded-md px-3 py-2 text-base font-medium"
  );

const DashboardLayout = (props) => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("hasLogin");
    navigate("/login");
  };

  return (
    <div className="flex flex-1 flex-col bg-slate-400">
      <div className="flex min-h-16 justify-around items-center bg-teal-900 gap-3">
        <NavLink
          className={navigationClassName}
          to=""
          end // supaya isActivenya itu dengan ==== bukan .includes lebih lengkapnya di src/advance/routing/routingIndexLearn.jsx
        >
          Home
        </NavLink>
        <div className="flex gap-5">
          <NavLink className={navigationClassName} to="/dashboard/users">
            Users
          </NavLink>
          <NavLink className={navigationClassName} to="menus">
            Menus
          </NavLink>
          <Button onPress={logoutHandler} color="danger">
            Logout
          </Button>
        </div>
      </div>
      <Outlet />
      {/* {props.children} */}
    </div>
  );
};

export default DashboardLayout;
