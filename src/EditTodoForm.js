import React from 'react';

class EditTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: this.props.text
      // editMode: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editTodo(this.props.id, this.state.text);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="text">Todo:</label>
          <input id="text" name="text" type="text"
            value={this.state.text}
            onChange={this.handleChange} />

          <button type="submit">Edit</button>

        </form>
      </div>
    );
  }
}

export default EditTodoForm; 