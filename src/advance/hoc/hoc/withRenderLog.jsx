// HOC buat function,

import { Component } from "react";

// tambah parameter sebuah Component misal SomeComponent
export const withRenderLog = function (SomeComponent) {
  // return Component
  return class ComponentHasilNya extends Component {
    render() {
      console.log("withRenderLog 1: kerender");

      return <SomeComponent />;
    }
  };
};

export const withRenderLog2 = function (SomeComponent) {
  const ComponentHasilNya = function (props) {
    console.log("withRenderLog2: kerender");
    return <SomeComponent />;
  };

  return ComponentHasilNya; // return Component bukan Element
};
