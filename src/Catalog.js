import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import defaultImageUrl from '../constants/defaultImageUrl'
import ProductCard from './product_card/ProductCard';

class Catalog extends Component {
  constructor(props) {
    super(props);

    this.products = props.products;
  }

  render() {
    const { products } = this;

    return (
      <div>
        <ul>
          {
            products.map((product) => (
              <li key={product.id}>
                <ProductCard src={product.imageUrl ? product.imageUrl : defaultImageUrl}
                  alt={product.title}
                  width='50px'
                  height='50px'
                  text={product.title}
                  price={product.price} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Catalog;
