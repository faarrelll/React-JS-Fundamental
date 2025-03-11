import { Component } from "react";

// var itu haram, tapi ini untuk demonstrasi
// var hasClicked = false;

// pakai var untuk ngetrack nilai atau kondisi itu ga bisa di react component
// untuk keperluan seperti itu, perlu yang namanya State (bisa dibilang sebagai memorynya/ingatannya komponent)

function conditionalRenderingFunctionDemo(hasClicked) {
  if (hasClicked) {
    return <h1>conditionalRenderingFunctionDemo: SUDAH DI CLICK</h1>;
  } else {
    // return null; kalau ingin gak tampil
    return <h1>conditionalRenderingFunctionDemo: BELUM DI CLICK</h1>;
  }
}

export class ConditionalRenderingDemo extends Component {
  // bayangin class property, nah yang udah terintegrasi dengan React.Component adalah
  // property state isinya object kosong atau default value di constructor
  //   state = {};
  constructor(props) {
    super(props);
    // nge assign default value ke state
    this.state = {
      hasClicked: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.buttonOnClickHandler2 = this.buttonOnClickHandler2.bind(this);
  }

  buttonOnClickHandler2() {
    // hasClicked = true;
    // console.log(this);

    // console.log(this.state.hasClicked);

    this.setState({
      hasClicked: true,
    });
  }

  // supaya dapat value this, salah satunya itu kita harus pakai arrow function untuk Class Methodnya
  buttonOnClickHandler = () => {
    // hasClicked = true;
    // console.log(this);

    // console.log(this.state.hasClicked);

    this.setState({
      hasClicked: true,
    });
  };

  // render method akan kepanggil ketika component pertama kali muncul atau ketika state berubah
  render() {
    // console.log("hasClicked", hasClicked);
    console.log("render() kepanggil");
    console.log("this.state.hasClicked", this.state.hasClicked);

    return (
      <div>
        <h1>ConditionalRenderingDemo</h1>
        {/* <h1>hasClicked value: {`${hasClicked}`}</h1> */}
        <h1>hasClicked value: {`${this.state.hasClicked}`}</h1>

        {/* Contoh Conditional Rendering, gak perlu pakai display: none dan display:block lagi dan dom manipulation
        tapi cukup dengan {condition && JSXnya} */}
        {this.state.hasClicked && <h1>UDAH DI CLICK</h1>}
        {conditionalRenderingFunctionDemo(this.state.hasClicked)}
        {this.state.hasClicked ? (
          <h1>TernaryConditionalRendering: SUDAH DI CLICK</h1>
        ) : (
          <h1>TernaryConditionalRendering: BELUM DI CLICK</h1>
        )}

        {/* nilai null, false, undefined akan diabaikan (tidak akan kelihatan) */}
        {null}
        {undefined}
        {false}
        <button onClick={this.buttonOnClickHandler}>
          change hasClicked to true
        </button>
      </div>
    );
  }
}

export default ConditionalRenderingDemo;
