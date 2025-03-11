import useTodosCustomHooks from "./hooks/useTodosCustomHooks";
import TodoListComponent from "../hoc/TodoListComponent";
import useRegistrationForm from "./hooks/useRegistrationForm";

const CustomHookDemo = () => {
  //   const returnDariCustomHooks = useTodosCustomHooks();
  //   const { data } = returnDariCustomHooks;

  // custom hook sebagai alternative dari HOC,
  //  khusunya di functional component itu pakainya custom hooks
  //   ketimbang HOC
  const { data } = useTodosCustomHooks();

  const { fields, updaters } = useRegistrationForm();

  fields.username; //  string kosong
  updaters.setUsername; // ini function

  return (
    <div>
      CustomHookDemo
      <TodoListComponent data={data} />
    </div>
  );
};

export default CustomHookDemo;
