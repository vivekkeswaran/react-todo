import React, {Component} from 'react';
import Header from './components/Header/Header';
import TodoInput from './components/TodoForm/TodoInput';
import TodoItem from './components/TodoForm/TodoItem';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {id: 1, text: "Meeting at 11am"},
        {id: 2, text: "Car Wash today"}
      ],
      nextId: 3
    }

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText) {
    let todo = this.state.todos.slice();
    let nextId = this.state.nextId;
    todo.push({id: this.state.nextId, text: todoText});
    this.setState({
      todos: todo,
      nextId: ++(nextId)
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => todo.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <Header className="title"/>
          <TodoInput todoText="" addTodo={this.addTodo}/>
          <div className="todoWrapper" id="todoScroll">
            <ul>
              {
                this.state.todos.map((todo)=>{
                  return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
                })
              }
            </ul> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
