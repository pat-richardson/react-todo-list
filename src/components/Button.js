import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { type = 'button', onClick, className = '', children } = this.props;

    return (
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
