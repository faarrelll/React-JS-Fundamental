import React, { useState } from "react";

// membuat functional component bisa punya state (memory dari component)
const UseStateDemo = () => {
  const [states, setStates] = useState({
    username: "",
    address: "",
    age: "",
  });
  //   setStates untuk update states
  //   states ya states dengan default value
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const useStateArray = useState("");
  const password = useStateArray[0];
  const setPassword = useStateArray[1];

  // dibalik layar useState adalah function yang return array [] seperti dibawah ini
  // const useState = (defaultValue) => {
  //   var currentState = defaultValue;
  //   const setState = (newValue) => {
  //     currentState = newValue;
  //   };
  //   return [currentState, setState];
  // };

  //   default value dengan callback
  const [token, setToken] = useState(() => {
    const defaultValueFromLocalStorage = localStorage.getItem("token");
    return defaultValueFromLocalStorage;
  });

  const fieldHandler = (fieldName, value) => {
    setStates({
      ...states,
      [fieldName]: value,
    });
  };

  const fieldHandlerBetter = (fieldName, value) => {
    setStates((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  fieldHandler("username", "John Doe");
  fieldHandlerBetter("address", "Bogor");
  fieldHandlerBetter("age", "25");

  return <div>UseStateDemo</div>;
};

export default UseStateDemo;
