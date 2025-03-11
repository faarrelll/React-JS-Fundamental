import React, { useEffect, useState } from "react";
import CenterContainer from "../../components/CenterContainer";
import { Button, Spinner } from "@nextui-org/react";
import { div } from "framer-motion/client";
import { useNavigate } from "react-router";

const MENUS = [
  {
    id: "SKU_01",
    name: "Bakso",
    price: 15000,
  },
  {
    id: "SKU_02",
    name: "Pizza Curah",
    price: 20000,
  },
  {
    id: "SKU_03",
    name: "Es Teh",
    price: 3000,
  },
];

const fetchDummyFunction = async () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(MENUS);
      }, 1500);
    } catch (error) {
      reject(error);
    }
  });
};

const fetchAndUpdateMenus = async (setMenusFunc, setLoadingFunc) => {
  setLoadingFunc(true);
  const menus = await fetchDummyFunction();
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
                    Name: {menuItem.name} - Price: {menuItem.price}
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
