import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Price extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { price } = this.props;

    return (
      <span>{price}$</span>
    );
  }
}

export default Price;
