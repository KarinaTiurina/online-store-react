import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Price extends Component {
  constructor(props) {
    super(props);

    this.price = props.price;
  }

  render() {
    const { price } = this;

    return (
      <span>{price}$</span>
    );
  }
}

export default Price;
