import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '~/src/productCard/Image';
import TextBox from '~/src/productCard/TextBox';
import Price from '~/src/productCard/Price';
import AddToBasket from '~/src/productCard/AddToBasket';

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
