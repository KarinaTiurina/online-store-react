import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { product } = this.props;

    return (
      <div>
        <Image image={product.image}
          alt={product.title} />
        <TextBox text={product.title} />
        <Price price={product.price} />
      </div>
    );
  }
}

export default ProductCard;
