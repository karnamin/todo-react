import React, { Component } from "react";

export class Todos extends Component {
    render() {
        return (
            <div className="todolist">
                {this.props.todos.map(todo => (
                    <div key={todo.id} className="todoitem">
                        <div className="todoitem__title">{todo.content}</div>
                        <div className="todoitem__remove">remove</div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Todos;
