import React, { Component } from "react";

export class ComponentYangDibungkusHoc extends Component {
  render() {
    return (
      <div className="flex bg-red-300">
        <h1 className="text-xl">Component Ini Dibungkus Oleh HOC</h1>
      </div>
    );
  }
}

export default ComponentYangDibungkusHoc;
