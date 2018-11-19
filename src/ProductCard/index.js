import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '~/src/ProductCard/Image';
import TextBox from '~/src/ProductCard/TextBox';
import Price from '~/src/ProductCard/Price';
import AddToBasket from '~/src/ProductCard/AddToBasket';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image, title, price } = this.props;

    return (
      <div>
        <TextBox text={title} />
        <Image {...image}
          alt={title} />
        <Price price={price} />
        <AddToBasket {...this.props} />
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
