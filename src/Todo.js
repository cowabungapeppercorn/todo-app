import React from 'react';
import EditTodoForm from './EditTodoForm';

class Todo extends React.Component {
  static defaultProps = {
    todoInfo: {
      text: "you should type things",
      id: "this is not that unique",
      editMode: false
    }
  }

  render() {

    let { text, id, editMode } = this.props.todoInfo;

    if (editMode) {
      return (
        <li>
          <EditTodoForm editTodo={this.props.editTodo} id={id} text={text} />
          editing...
          <button onClick={() => this.props.remove(id)}>X</button>
        </li>
      );
    } else {
      return (
        <li>
          {text}
          <button onClick={() => this.props.remove(id)}>X</button>
          <button onClick={() => this.props.toggleEdit(id)}>Edit</button>
        </li>
      );
    }
  }
}

export default Todo;