import React from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import uuid from 'uuid/v4';

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
    this.remove = this.remove.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }


  addTodo(todo) {
    let newTodo = { ...todo, id: uuid() };
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }));
  }

  remove(id) {
    let newTodoList = this.state.todos.filter(todo => todo.id !== id);
    this.setState({ todos: newTodoList });
  }

  toggleEdit(id) {
    let newTodoList = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.editMode = true;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodoList });
  }

  editTodo(id, text) {
    let newTodoList = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.text = text;
        todo.editMode = false;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos: newTodoList });
  }


  render() {
    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        <ul>
          {this.state.todos.map(todo => {
            return <Todo todoInfo={todo} toggleEdit={this.toggleEdit} editTodo={this.editTodo} key={todo.id} remove={this.remove}/>
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;