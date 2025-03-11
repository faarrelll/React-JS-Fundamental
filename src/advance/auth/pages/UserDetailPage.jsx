import React, { useEffect, useState } from "react";
import CenterContainer from "../../components/CenterContainer";
import { useNavigate, useNavigation, useParams } from "react-router";
import { Button } from "@nextui-org/react";

const USERS = [
  {
    id: "CIF_01",
    name: "admin",
    role: "ADMIN",
  },
  {
    id: "CIF_02",
    name: "staff",
    role: "STAFF",
  },
  {
    id: "CIF_03",
    name: "customer",
    role: "CUSTOMER",
  },
];

const getUserById = async (userId) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(
          USERS.find((user) => {
            return user.id === userId;
          })
        );
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};

const fetchFunction = async (userId, setUserCb) => {
  const user = await getUserById(userId);
  setUserCb(user);
};

const UserDetailPage = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  // useParams hooks untuk dapetin url params (path variable)
  const params = useParams();
  // kenapa .id karena index di routingnya itu :id
  const userId = params.id;

  useEffect(() => {
    fetchFunction(userId, setUser);
  }, [userId]);

  const backButtonHandler = () => {
    navigate(-1);
  };

  return (
    <CenterContainer>
      <Button color="primary" onPress={backButtonHandler}>
        {"<= Go Back"}
      </Button>
      <h1 className="text-3xl">User Detail</h1>
      <p>Id: {user.id}</p>
      <p>Nama: {user.name}</p>
      <p>Role: {user.role}</p>
    </CenterContainer>
  );
};

export default UserDetailPage;
