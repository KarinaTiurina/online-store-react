import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import BuyButton from './BuyButton';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, title, price } = this.props;

    return (
      <div>
        <Image {...image}
          alt={title} />
        <TextBox text={title} />
        <Price price={price} />
        <BuyButton />
      </div>
    );
  }
}

ProductCard.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: Price.propTypes.price
};

export default ProductCard;
