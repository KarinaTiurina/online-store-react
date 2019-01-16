import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <ul>
          {
            products.map((product) => (
              <li key={product.id}>
                <ProductCard {...product} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(ProductCard.propTypes)
  )
};

export default ProductList;
