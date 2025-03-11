import React, { useCallback, useState } from "react";
import CenterContainer from "../components/CenterContainer";
import IntermediateComponent from "./components/IntermediateComponent";

const UseCallbackDemo = () => {
  const [counter, setCounter] = useState(0);

  // dengan useCallback dia gak akan bikin function baru ketika component UseCallbackDemo itu rerender
  // dia akan bikin function baru ketik dependency arraynya [counter] yaitu counter berubah
  // kalau kosong [] maka incrementHandlerOptimized selamanya akan setCounter(1);
  const incrementHandlerOptimized = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  // kalau kosong [] maka incrementHandlerOptimized selamanya akan setCounter(-1);
  const decrementHandlerOptimized = useCallback(() => {
    setCounter(counter - 1);
  }, [counter]);

  return (
    <CenterContainer>
      <IntermediateComponent
        counterValue={counter}
        // incrementHandler={() => {
        //   setCounter(counter + 1);
        // }}
        // decrementHandler={() => {
        //   setCounter(counter - 1);
        // }}
        incrementHandler={incrementHandlerOptimized}
        decrementHandler={decrementHandlerOptimized}
      />
    </CenterContainer>
  );
};

export default UseCallbackDemo;
