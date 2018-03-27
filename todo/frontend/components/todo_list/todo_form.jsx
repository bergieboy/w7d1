import { uniqueId } from '../../util/id_generator';
import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: "",
      body: ""
    }); // reset form
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            className="input"
            value={this.state.title}
            placeholder="eat breakfast"
            onChange={this.update('title')}
            required/>
        </label>
        <br/>
        <label>Body:
          <textarea
            className="input"
            value={this.state.body}
            placeholder="eggs and bacon"
            onChange={this.update('body')}
            required></textarea>
        </label>
        <br/>
        <button className="create-button">Create Todo!</button>
      </form>
    );
  }
};

export default TodoForm;
