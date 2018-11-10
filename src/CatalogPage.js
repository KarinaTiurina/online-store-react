import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Catalog from './Catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);

    this.products = props.products;
  }

  render() {
    const { products } = this;

    return (
      <div>
        <Catalog products={products} />
      </div>
    );
  }
}

export default CatalogPage;
