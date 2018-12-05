import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';
import AddToBasket from './AddToBasket';
import { Link } from 'react-router-dom';
import { productPath } from '~/src/helpers/routes';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, price } = this.props;
    const image = this.props.images[0];

    return (
      <div>
        <Link to={productPath(id)}>
          <TextBox text={title} />
          <Image {...image}
            alt={title} />
        </Link>
        <Price price={price} />
        <AddToBasket {...this.props} />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: Price.propTypes.price
};

export default ProductCard;
