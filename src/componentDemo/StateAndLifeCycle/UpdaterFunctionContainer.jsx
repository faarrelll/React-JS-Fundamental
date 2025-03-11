import React, { Component } from "react";
import CounterProblemComponent from "./CounterProblemComponent";
import CounterSolutionComponent from "./CounterSolutionComponent";

export class UpdaterFunctionContainer extends Component {
  render() {
    return (
      <div>
        <CounterProblemComponent />
        <CounterSolutionComponent />
      </div>
    );
  }
}

export default UpdaterFunctionContainer;
