import React, { Component } from "react";

// let counter = 100000;

export class CounterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 0,
      counter: 1000_000,
    };

    console.log("Constructer Terpanggil");
  }

  // (mounting lifecycle listener method)
  componentDidMount() {
    console.log("Component Selesai Mounting, dan componentDidMount terpanggil");

    this.timeID = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
      });
      console.log("setInterval dengan seconds: ", this.state.seconds);
    }, 1000);
  }

  // Tahap kehidupan UPDATING,
  // ketika props berubah atau state berubah
  // maka render method terpanggil
  // Jika render aman makan commit update ke DOM
  // setelah DOM terupdate maka componentDidUpdate method (updating lifecycle listener method) akan terpanggil
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate terpanggil dengan: ", {
      // prevProps,
      counterSebelumnya: prevState.counter,
      counterSaatIni: this.state.counter,
      // currentProps: this.props,
    });
  }

  componentWillUnmount() {
    console.log(
      "componentWillUnmount terpanggil artinya component dicopot (atau diremove) dari DOM"
    );

    // untuk mengatasi masalah memoryleak, di comment untuk menunjukan setInterval berjalan terus menerus bisa
    // mengakibatkan perurunan performance web
    clearInterval(this.timeID);
  }

  render() {
    console.log("Render Method Terpanggil");

    return (
      <div style={styles.container}>
        <h1>Counter Page</h1>
        <button
          style={styles.button("lightgreen")}
          type="button"
          onClick={() => {
            // console.log("counter", counter);
            // counter = counter + 100000;
            // tidak bisa pakai variable javascript untuk trigger re-render
            // harus pakai state component untuk re-render
            this.setState({
              counter: this.state.counter + 1000_000,
            });
          }}
        >
          Click to TAMBAH UANG (+)
        </button>

        {/* <h1>Uang saat ini Rp{counter}</h1> */}
        <h1>Uang saat ini Rp {this.state.counter}</h1>

        <button
          style={styles.button("lightpink")}
          type="button"
          onClick={() => {
            // console.log("counter", counter);
            // counter = counter - 100000;
            this.setState({
              counter: this.state.counter - 1000_000,
            });
          }}
        >
          Click to KURANGIN UANG (-)
        </button>
        <div>
          <h1>Detik telah berjalan: {this.state.seconds}</h1>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "lightblue",
    padding: 100,
  },
  button: (color) => ({
    fontSize: "16px",
    border: "none",
    backgroundColor: color,
    borderRadius: "5px",
  }),
};

export default CounterComponent;
