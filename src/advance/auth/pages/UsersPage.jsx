import React, { useEffect, useState } from "react";
import CenterContainer from "../../components/CenterContainer";
import { Button, Input, Spinner } from "@nextui-org/react";
import { useNavigate, useSearchParams } from "react-router";

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

const fetchDummyFunction = async (userQuery) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(
          USERS.filter((user) => {
            console.log("DEBUG", {
              userQuery,
              user,
              isFiltered: !userQuery || user.name.includes(userQuery),
            });

            return !userQuery || user.name.includes(userQuery);
          })
        );
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};

const fetchAndUpdateUsers = async (userQuery, setUsersFunc, setLoadingFunc) => {
  setLoadingFunc(true);
  const users = await fetchDummyFunction(userQuery);
  setUsersFunc(users);
  setLoadingFunc(false);
};

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchAndUpdateUsers(userQuery, setUsers, setLoading);
  }, [userQuery]);

  const toUserDetailHandler = (user) => (_e) => {
    // cara kirim navigation state
    navigate(`/dashboard/users/${user.id}`, {
      state: {
        user,
      },
    });
  };

  const searchHandler = (e) => {
    const { value: userQuery } = e.target || {};
    setUserQuery(e.target?.value);
    const params = new URLSearchParams();
    params.set("name", userQuery);
    setSearchParams(params, {
      preventScrollReset: true,
    });
  };

  console.log("searchParams.get name", searchParams.get("name"));

  // misal dari databasenya itu HTML, nah bisa pakai ini dangerouslySetInnerHTML
  // TAPI bahaya, mengandung Security Risk
  const htmlString = "<div class='text-5xl'>HTML String</div>";

  return (
    <CenterContainer>
      <h1 className="text-3xl">User Page</h1>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          onChange={searchHandler}
          label="Search User"
          placeholder="Enter the user name"
          type="text"
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      <ul>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col">
            {users.map((userItem) => {
              return (
                <Button
                  color="primary"
                  key={userItem.id}
                  onPress={toUserDetailHandler(userItem)}
                >
                  <li>
                    Name: {userItem.name} - Role: {userItem.role}
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

export default UserPage;
