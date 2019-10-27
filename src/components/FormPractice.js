import React, { Component } from 'react';
import Button from './Button';

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
        <Form onSubmit={this.onSubmit}>
          <InputField username={username} setUsername={this.setUsername}>
            Name:
          </InputField>
          <Button type="submit">Send</Button>
        </Form>
      </div>
    );
  }
}

class Form extends Component {
  render() {
    const { onSubmit, children } = this.props;

    return (
      <form
        onSubmit={event => {
          onSubmit();
          event.preventDefault();
        }}
      >
        {children}
      </form>
    );
  }
}

class InputField extends Component {
  render() {
    const { children, username, setUsername } = this.props;

    return (
      <label>
        {children}
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
    );
  }
}

export default FormPractice;
