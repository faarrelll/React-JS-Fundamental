import React from "react";
import StatelessComponent from "./StatelessComponent";
import StatefulComponent from "./StatefulComponent";

const StatefulVsStatelessComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <StatelessComponent
        title="Stateless Component (Dikirim dari Parent)"
        content="Stateless Content"
      />
      <StatefulComponent
        title="Stateful Component (Dikirim dari Parent)"
        content="Stateful Content"
      />
    </div>
  );
};

export default StatefulVsStatelessComponent;
