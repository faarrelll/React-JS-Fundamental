import React, { Component } from "react";
import TodoAPI from "../../api/todoAPI";
const withTodos = (SebuahComponent) => {
  class SebuahClassDenganTodos extends Component {
    constructor(props) {
      super(props);

      this.state = {
        todos: [],
      };
    }

    async componentDidMount() {
      const todosResponse = await TodoAPI.getAllTodos();
      this.setState({
        todos: todosResponse,
      });
    }

    render() {
      return <SebuahComponent data={this.state.todos} />;
    }
  }

  return SebuahClassDenganTodos;
};
export default withTodos;
