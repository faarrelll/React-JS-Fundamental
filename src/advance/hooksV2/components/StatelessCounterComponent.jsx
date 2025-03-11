import React, { useRef } from "react";
import CenterContainer from "../../components/CenterContainer";
import { Button } from "@nextui-org/react";

const StatelessCounterComponent = (props) => {
  const berapaKaliSudahRender = useRef(1);
  console.log("berapaKaliSudahRender: ", berapaKaliSudahRender.current);
  berapaKaliSudahRender.current = berapaKaliSudahRender.current + 1;

  return (
    <CenterContainer>
      <div className="text-2xl">{props.counterValue}</div>
      <Button onPress={props.incrementHandler}>ADD / Increment (+)</Button>
      <Button onPress={props.decrementHandler}>DECREASE / Decrement (-)</Button>
    </CenterContainer>
  );
};

export default StatelessCounterComponent;
