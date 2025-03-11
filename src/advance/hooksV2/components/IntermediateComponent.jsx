import React from "react";
import StatelessCounterComponent from "./StatelessCounterComponent";

const IntermediateComponent = (props) => {
  return (
    <div>
      <StatelessCounterComponent {...props} />
    </div>
  );
};

export default IntermediateComponent;
