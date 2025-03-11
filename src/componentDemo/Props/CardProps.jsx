import React, { Component } from "react";

export class CardProps extends Component {
  render() {
    if (this.props.id === "counter") {
      console.log("CardProps counter rendered");
    } else {
      // memo lets you skip re-rendering a component when its props are unchanged. https://react.dev/reference/react/memo
      // pakai React.memo supaya ketika parent rerender gak rerender juga (syarat props dan state gak berubah)
      console.log("CardProps BUKAN counter rendered");
    }

    // coba kita hack props size nya
    // ternyata gak bisa
    // Cannot assign to read only property 'size' of object '
    // karena props itu immutable dan read only object
    // this.props.size = "1000px";
    if (this.props.listTest) {
      // ini gak boleh
      this.props.listTest.push("test");
    }
    console.log("this.props.listTest", this.props.listTest);

    return (
      <div
        style={{
          backgroundColor: this.props.color,
          width: this.props.size,
          height: this.props.size,
        }}
      >
        {/* Content dari Card, Ceritanya mau bebas */}
        {this.props.children}
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default CardProps;
