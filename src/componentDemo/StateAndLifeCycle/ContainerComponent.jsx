import React, { useState } from "react";
import CounterComponent from "./CounterComponent";
import CounterFunctionalComponent from "./CounterFunctionalComponent";

const ContainerComponent = () => {
  const [isShowCounter, setIsShowCounter] = useState(false);
  return (
    <div>
      <h1>Container Component</h1>
      <button
        type="button"
        onClick={() => {
          setIsShowCounter(!isShowCounter);
        }}
      >
        TOGGLE TAMPILKAN COUNTER
      </button>
      {/* {isShowCounter && <CounterComponent />} */}
      {isShowCounter && <CounterFunctionalComponent />}
    </div>
  );
};

export default ContainerComponent;
