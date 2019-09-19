import React from 'react';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: "",
      editMode: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ text: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="text">Todo:</label>
          <input id="text" name="text"
            value={this.state.text}
            onChange={this.handleChange} />

          <input type="submit" />

        </form>
      </div>
    );
  }
}

export default NewTodoForm; 