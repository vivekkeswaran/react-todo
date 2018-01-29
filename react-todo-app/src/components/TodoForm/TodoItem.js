import React, {Component} from 'react';

export default class TodoItem extends Component {

    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
        <div className="todoContainer"> 
            <button className="btn btn-danger" onClick={() => this.removeTodo(this.props.id)}>Remove</button>{this.props.todo.text} 
        </div> 
        )
    }
}