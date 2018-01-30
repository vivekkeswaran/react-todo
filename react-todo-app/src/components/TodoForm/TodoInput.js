import React, {Component} from 'react';
import './TodoForm.css';

export default class TodoInput extends Component {
    
    windowId = 1;
    
    constructor(props) {
        super(props);
        
        this.state = { inputItem: ''}

        this.fetchInput = this.fetchInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    fetchInput = (event) => {
        this.setState({inputItem: event.target.value});
    }

    addTodo = (todo) => {
        if (todo.length > 0)
        {
            this.props.addTodo(todo);
            this.setState({
                inputItem: ''
            });
        }
    }

    render() {
        return (
            <div className="todoFormContainer">
                <input type="text" value={this.state.inputItem} onChange={this.fetchInput}/>
                <a className="btn btn-success" onClick={() => this.addTodo(this.state.inputItem)}>
                    <span className="icon">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </span>
                    <span>Add</span>
                </a>
            </div>
        );
    }
}
