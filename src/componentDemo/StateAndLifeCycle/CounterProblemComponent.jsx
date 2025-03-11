import React, { Component } from "react";

export class CounterProblemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <>
        <h1>CounterProblemComponent: {this.state.counter + 1}</h1>
        <button
          onClick={() => {
            console.log("this.state.counter + 1: ", this.state.counter + 1);
            this.setState({
              counter: this.state.counter + 1,
            });

            console.log("this.state.counter + 1: ", this.state.counter + 1);
            this.setState({
              counter: this.state.counter + 1,
            });

            console.log("this.state.counter + 1: ", this.state.counter + 1);
            // this.setState({
            //   counter: 1, // this.state.counter=0; maka this.state.counter + 1 = 1
            // });
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
        >
          +3
        </button>
      </>
    );
  }
}

export default CounterProblemComponent;
