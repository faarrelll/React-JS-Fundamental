import { Button } from "@nextui-org/react";
import React, { useReducer } from "react";
import CenterContainer from "../components/CenterContainer";

// mirip dengan redux, karena ya terinspirasi dari redux
// reducer adalah function yang mengembalikan object state
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + 1,
        },
      };
    case "decrement":
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - 1,
        },
      };

    default:
      return state;
  }
};

const initialState = {
  counter: {
    value: 0,
    minValue: 0,
  },
  something: {},
};

const UseReducerDemo = () => {
  // seperti useState tapi dengan syntax seperti reducer dan dispatch di redux
  // useState with additional step
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  console.log({
    state,
  });

  return (
    <CenterContainer>
      <h1>counter value: {state?.counter?.value}</h1>
      <Button
        color="primary"
        onPress={() => {
          dispatch({
            type: "increment",
          });
        }}
      >
        Add
      </Button>
    </CenterContainer>
  );
};

export default UseReducerDemo;
