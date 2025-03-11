import React, { useEffect, useState } from "react";
import TodoAPI from "../api/todoAPI";

const UseEffectDemo = () => {
  const [todos, setTodos] = useState([]);
  const [limit, setLimit] = useState(10);

  async function getTodos(limitParam) {
    const todosData = await TodoAPI.getAllTodos(limitParam);
    setTodos(todosData);
  }

  //   useEffect is a React Hook that lets you synchronize a component with an external system.
  //   ATAU
  // The Effect Hook lets you perform side effects in function components:
  //  SIDE EFFECT ini misalnya fetching API dengan axios
  // menirukan componentDidMount
  //   Usage
  // Connecting to an external system
  // contoh usage adalah Fetching data with Effects

  //   ketika dependency arraynya kosong
  // maka useEffect callback hanya akan kepanggil sekali (saat mounting) makanya setara dengan componentDidMount

  //   useEffect Callback ini adalah () => {
  //     getTodos();
  // }
  //   sedangkan argument kedua dari useEffect yaitu [] dinamakan dependency array
  useEffect(() => {
    getTodos();

    // return callback cleanup,
    // kenapanya namanya cleanup karena biasanya
    // untuk ngebersihin memory dari listener atau function yang berjalan terus menerus
    // sepert setInterval
    // callback cleanup akan dijalankan ketika fase Unmounting jadi seperti componentWillUnmount
    return () => {
      // memory leak demo ada di src/componentDemo/StateAndLifeCycle/CounterComponent.jsx
      // misal untuk buat web push notification, nah itu kita perlu subscribe/ tambah listener
      // subscribe ke sistem (SDK) push notification
      // kalau component ini udah gak tampil kita harus unsubscribe
      console.log("componentWillUnmount: setara componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    getTodos(limit); // setiap limitnya berubah,
    //  maka akan menjalakan callback functionya
  }, [limit]); // dependency array bisa state, bisa props

  return (
    <div>
      UseEffectDemo{" "}
      <input
        type="text"
        onChange={(e) => {
          setLimit(e.target.value);
        }}
      />
      {todos.map((todoItem) => {
        return <div key={todoItem.id}>todoItem: {todoItem.title}</div>;
      })}
    </div>
  );
};

export default UseEffectDemo;
