import React, { useEffect, useState } from "react";

const CounterFunctionalComponent = (props) => {
  const [counter, setCounter] = useState(1000_000);

  useEffect(() => {
    console.log(
      "ComponentDidMount: setara dengan ComponentDidMount di Class Component ketika useEffect dengan tanpa dependency array atau array kosong []"
    );

    return () => {
      console.log("CLEANUP CALLBACK DI PANGGIL");

      console.log(
        "CLEANUP CALLBACK componentWillUnmount: setara componentWillUnmount"
      );
    };
  }, []); // [] adalah dependency array

  useEffect(() => {
    console.log(
      `ComponentDidUpdate: setara dengan ComponentDidUpdate
      tapi BERBEDA dia akan terpanggil saat Mounting juga (Sekali). Dengan nilai counter: `,
      counter
    );
  }, [counter, props.title]);

  return (
    <div style={styles.container}>
      <h1>Counter Page</h1>
      <button
        style={styles.button("lightgreen")}
        type="button"
        onClick={() => {
          setCounter(counter + 1000_000);
        }}
      >
        Click to TAMBAH UANG (+)
      </button>

      <h1>Uang saat ini Rp {counter}</h1>

      <button
        style={styles.button("lightpink")}
        type="button"
        onClick={() => {
          setCounter(counter - 1000_000);
        }}
      >
        Click to KURANGIN UANG (-)
      </button>
    </div>
  );
};

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

export default CounterFunctionalComponent;
