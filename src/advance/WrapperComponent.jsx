import React, { Component } from "react";

export class WrapperComponent extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "yellowgreen",
          padding: "50px",
          height: "500px",
          width: "500px",
        }}
        className="flex justify-center items-center"
      >
        {/* WrapperComponent component akan membungkus children element */}
        {this.props.children}
      </div>
    );
  }
}

export default WrapperComponent;
