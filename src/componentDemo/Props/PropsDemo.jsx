import React, { Component } from "react";
import CardProps from "./CardProps";
import ButtonProps from "./ButtonProps";

// PROPS ITU SATU ARAH MENGIRIM DATA DARI PARENT KE CHILD
export class PropsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>Props Demo</h1>
        <button
          onClick={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          CLICK to add counter
        </button>
        <CardProps title="Contoh Merah" color="red" size="300px" />
        <CardProps
          id="counter"
          title={"Counter Card" + this.state.counter}
          color="lightblue"
          size="300px"
        />
        <CardProps
          title="Contoh Green"
          color="green"
          size="300px"
          listTest={[]}
        >
          {/* yang diapit CardProps adalah masing2 child dari CardProps
          dalam bentuk jamak disebut children (anak-anak)
          */}
          <p>Ini child 1</p>
          <p>Ini child 2</p>
          {/* salah satu child dari CardProps */}
          <p>Ini child 3</p>
        </CardProps>
        <ButtonProps
          buttonName="Pencet Tombol"
          onButtonClick={() => {
            alert("Kepencet");
          }}
        />
      </div>
    );
  }
}

export default PropsDemo;
