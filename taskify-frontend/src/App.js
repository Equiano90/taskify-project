import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        id: null,
        name: '',
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      task: {
        ...this.state.task,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div>
        <h1>Taskify</h1>
        <Form>
          <input
            type="text"
            placeholder="Enter task name"
            name="name"
            value={this.state.task.name}
            onChange={this.handleChange}
          />
          <button type="submit">Update Task</button>
        </Form>
      </div>
    );
  }
}

export default App;