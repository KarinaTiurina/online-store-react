import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './product_card/ProductCard';

class Catalog extends Component {
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
                <ProductCard product={product} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Catalog;
