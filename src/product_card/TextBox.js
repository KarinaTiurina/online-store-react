import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TextBox extends Component {
  constructor(props) {
    super(props);

    this.text = props.text;
  }

  render() {
    const { text } = this;

    return (
      <span>{text}</span>
    );
  }
}

export default TextBox;
