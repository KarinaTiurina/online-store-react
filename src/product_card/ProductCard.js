import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToBasket from './add_to_basket';

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
