import React from "react";
import CenterContainer from "../../components/CenterContainer";
import { useNavigation } from "react-router";

const MenuDetailPage = () => {
  // cara dapetin navigation state yang dikirim oleh MenuPage
  //   TODO: useNavigation cannot be used
  //    useNavigation must be used within a data router.
  const navigation = useNavigation();
  const { menu } = navigation?.state || {};

  return (
    <CenterContainer>
      <h1 className="text-3xl">Menu Detail</h1>
      <p>Id: {menu.id}</p>
      <p>Nama: {menu.name}</p>
      <p>Harga: {menu.price}</p>
    </CenterContainer>
  );
};

export default MenuDetailPage;
