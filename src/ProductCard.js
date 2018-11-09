import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const { src, alt, width, height, text, price } = this.props;

    return (
      <div>
        <Image src={src}
          alt={alt}
          width={width}
          height={height} />
        <TextBox text={text} />
        <Price price={price} />
      </div>
    );
  }
}

export default ProductCard;
