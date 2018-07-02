import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';
import uniqueId from './util';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "", body: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = this.state.title;
    const body = this.state.body;
    const id = uniqueId();
    this.props.receiveTodo(title, body, id);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render () {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <label>
          Title
          <input
            type="text"
            onChange={this.update("title")}
            value={this.state.title}
          />
        </label>
        <label>
          Body
          <input
            type="text"
            onChange={this.update("body")}
            value={this.state.body}
          />
        </label>
        <input type="submit" value="Add new Todo" />
      </form>
    );
  }
}

export default TodoForm;
