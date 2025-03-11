import { Component } from "react";

const WELCOME_BRO_WORDING = "Welcome Bro From JSX Expression";

// untuk memasukan Javascript atau JSX expression kedalam JSX itu menggunakan curly braces {}
class WelcomeJSX extends Component {
  clickMeBoyHandler = function () {
    alert("Welcome Bro JSX");
  };

  methodReturnValue = () => {
    return "Welcome Bro From methodReturnValue";
  };

  render() {
    return (
      <div>
        {/* statis hardcode */}
        <h1>Welcome Bro Statis Hard Code</h1>
        {/* bisa dinamis dengan variable */}
        <h1>{WELCOME_BRO_WORDING}</h1>
        <h1>{this.methodReturnValue()}</h1>
        {/* Curly braces di dalam JSX untuk memassukan JSX Expression */}
        <button onClick={this.clickMeBoyHandler}>Click Me Bro JSX</button>
      </div>
    );
  }
}

export default WelcomeJSX;
