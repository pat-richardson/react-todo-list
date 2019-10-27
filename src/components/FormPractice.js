import React, { Component } from 'react';

class FormPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'World'
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.setUsername = this.setUsername.bind(this);
  }

  onSubmit() {
    console.log(this.state.username);
  }

  setUsername(username) {
    this.setState({ username });
  }
  render() {
    const { username } = this.state;
    return (
      <div>
        <h1>Hello {username}</h1>
        <Form username={username} onSubmit={this.onSubmit} setUsername={this.setUsername}></Form>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    const { username, onSubmit, setUsername } = this.props;

    return (
      <form
        onSubmit={event => {
          onSubmit();
          event.preventDefault();
        }}
      >
        <label>
          Name:
          <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
        </label>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default FormPractice;
