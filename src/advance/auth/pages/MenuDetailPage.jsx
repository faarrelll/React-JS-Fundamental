import React from "react";
import CenterContainer from "../../components/CenterContainer";
import { useNavigation, useParams } from "react-router";
import { useLocation } from "react-router";

const MenuDetailPage = () => {
  const location = useLocation();

  const { menu } = location?.state || {};

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
