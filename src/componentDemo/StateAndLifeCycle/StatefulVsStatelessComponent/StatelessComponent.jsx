import React from "react";

// Stateless Component adalah Component yang tidak memiliki State di Componentnya
// Atau hanya sedikit state
// Kegunaannya adalah untuk menampilkan UI, dan memisahkan antara
// UI/VIEW (representasi visual data) dengan LOGIC
// setara dengan Presentational components are purely focused on the UI rendering logic.
const StatelessComponent = (props) => {
  return (
    <div>
      <h1>
        Representasi Data Visual (Hanya meneruskan data dari props, tidak
        memiliki State internal)
      </h1>
      {props.header}
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {props.renderFooter}
    </div>
  );
};

export default StatelessComponent;
