import React, { Component } from "react";

// Stateless Component
//
// Fungsi ke 1 HOC:
// jadi antara Logic dan Representational baiknya dipisah
// dan untuk Class Component Logic itu bisa ditaruh di HOC
// sedangkan tampilan di Componentnya
// Fungsi ke 2 HOC:
// untuk reuse logic
export class TodoListVersi2Component extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "blue",
        }}
      >
        {this.props.data?.length > 0 &&
          this.props.data.map((item) => {
            return <h1>{item.title}</h1>;
          })}
      </div>
    );
  }
}

export default TodoListVersi2Component;
