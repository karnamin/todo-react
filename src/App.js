import React, { Component } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Todos from "./components/Todos";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 0,
                    content: "Todo 1",
                    done: false
                },
                {
                    id: 1,
                    content: "Todo 2",
                    done: false
                }
            ]
        };
    }

    addTodo = content => {
        let todos = this.state.todos;
        todos.push({ id: todos.length, content: content, done: false });
        this.setState({ todos });
    };

    render() {
        return (
            <div>
                <Navbar addTodo={this.addTodo} />
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
