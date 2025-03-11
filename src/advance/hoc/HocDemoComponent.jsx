import React, { Component } from "react";
import { withRenderLog, withRenderLog2 } from "./hoc/withRenderLog";
import ComponentYangDibungkusHoc from "./ComponentYangDibungkusHoc";
import withTodos from "./hoc/withTodos";
import TodoListComponent from "./TodoListComponent";
import TodoListVersi2Component from "./TodoListVersi2Component";

// withRenderLog(ComponentYangDibungkusHoc) akan return Component
// maka ComponentWithRenderLog juga adalah Component

// fungsi HOC itu untuk menambahkan functionalitas atau
// data atau
// logic tertentu ke sebuah component
// const ComponentWithRenderLog = withRenderLog(ComponentYangDibungkusHoc);

// bisa dichaining seperti ini
const ComponentWithRenderLog = withRenderLog2(
  withRenderLog(ComponentYangDibungkusHoc)
);

// dengan adanya withTodo kita gak perlu ngefetch dgn axios todos
// di kedua component TodoListComponent dan TodoListVersi2Component
// karena kita ngereus logicnya dengan HOC kita withTodos

// A higher-order component (HOC)
// is an advanced technique in React for reusing component logic.
// https://legacy.reactjs.org/docs/higher-order-components.html
const ComponentWithTodos = withTodos(TodoListComponent);
const ComponentWithTodosVersi2 = withTodos(TodoListVersi2Component);

export class HocDemoComponent extends Component {
  render() {
    return (
      <div>
        <h1 className="text-xl">HocDemoComponent </h1>
        <ComponentWithRenderLog />
        <ComponentWithTodos />
        <ComponentWithTodosVersi2 />
      </div>
    );
  }
}

export default HocDemoComponent;
