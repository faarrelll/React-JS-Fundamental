import React, { useEffect, useState } from "react";
import CenterContainer from "../../components/CenterContainer";
import { Button, Spinner } from "@nextui-org/react";
import { div } from "framer-motion/client";
import { useNavigate } from "react-router";
import WmbMenuAPI from "../../api/WmbMenuAPI";

const fetchAndUpdateMenus = async (setMenusFunc, setLoadingFunc) => {
  setLoadingFunc(true);
  const menus = await WmbMenuAPI.getAllMenu();
  setMenusFunc(menus);
  setLoadingFunc(false);
};

const MenuPage = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAndUpdateMenus(setMenus, setLoading);
  }, []);

  const toMenuDetailHandler = (menu) => (_e) => {
    // cara kirim navigation state
    navigate(`/dashboard/menus/${menu.id}`, {
      state: {
        menu,
      },
    });
  };
  // if (menus) {
  //   throw new Error("abc");
  // }

  return (
    <CenterContainer>
      <h1 className="text-3xl">Menu Page</h1>
      <ul>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col">
            {menus.map((menuItem) => {
              return (
                <Button
                  color="primary"
                  key={menuItem.id}
                  onPress={toMenuDetailHandler(menuItem)}
                >
                  <li>
                    Name: {menuItem.name} - Price: {menuItem.price} - Category:
                    {menuItem.category}
                  </li>
                </Button>
              );
            })}
          </div>
        )}
      </ul>
    </CenterContainer>
  );
};

export default MenuPage;
