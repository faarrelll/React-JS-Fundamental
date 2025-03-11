import React, { useEffect, useState } from "react";
import CenterContainer from "../../../components/CenterContainer";
import TodoAPI from "../../../api/TodoAPI";
import { div } from "framer-motion/client";
import { Button } from "@nextui-org/react";
const FetchBackendDemo = () => {
  const [todoList, setTodoList] = useState([]);

  // kita manfaatkan LifeCycle ComponenDidMount, kita manfaatkan useEffect
  useEffect(() => {
    const getAllTodos = async () => {
      console.log("A. didalam TODO");
      const todoListFromBe = await TodoAPI.getAllTodos();
      console.log("B. setelah fetch TODO: ", todoListFromBe);
      setTodoList(todoListFromBe);
    };

    getAllTodos();
    console.log("C. setelah TODO");
  }, []);

  return (
    <CenterContainer>
      <div className="flex flex-1 flex-col bg-rose-300 w-full justify-center items-center">
        <div>abc</div>
        <div>def</div>
        <div>abc</div>
        <div>def</div>

        <ul className="list-inside">
          {(todoList || []).map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </CenterContainer>
  );
};

export default FetchBackendDemo;
