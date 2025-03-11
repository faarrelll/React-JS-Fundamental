import { useState } from "react";

const useRegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  return {
    fields: {
      username,
      address,
      age,
      password,
    },
    updaters: {
      setUsername,
      address,
      setAddress,
      setAge,
      setPassword,
    },
  };
};

export default useRegistrationForm;
