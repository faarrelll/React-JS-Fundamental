import React, { Component } from "react";

export class CounterSolutionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <>
        <h1>CounterSolutionComponent: {this.state.counter + 1}</h1>
        <button
          onClick={() => {
            // setState diisi dengan function (State Updater functions )
            this.setState((previousState) => ({
              counter: previousState.counter + 1,
            }));

            // bentuk lain dari yang diatas
            this.setState((previousState) => {
              return {
                counter: previousState.counter + 1,
              };
            });

            this.setState((previousState) => {
              return {
                counter: previousState.counter + 1,
              };
            });
          }}
        >
          +3
        </button>
      </>
    );
  }
}

export default CounterSolutionComponent;
