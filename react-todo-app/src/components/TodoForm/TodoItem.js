import React, {Component} from 'react';

export default class TodoItem extends Component {

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
        <div className="todoContainer"> 
            <a className="btn btn-danger" onClick={() => this.removeTodo(this.props.id)}>
                <span className="icon">
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </span>
                <span>Remove</span>
            </a>
            <span className="todoText">{this.props.todo.text}</span>
        </div> 
        )
    }
}