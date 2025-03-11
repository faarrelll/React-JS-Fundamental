import { useEffect, useState } from "react";
import TodoAPI from "../../api/todoAPI";

const useTodosCustomHooks = () => {
  const [todoList, setTodoList] = useState([]);

  const fetchTodos = async () => {
    const todosData = await TodoAPI.getAllTodos();
    console.log("todosData", todosData);

    setTodoList(todosData);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return {
    data: todoList,
  };
};

export default useTodosCustomHooks;
