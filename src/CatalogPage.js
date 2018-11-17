import React, { Component } from 'react';
import Catalog from './Catalog';
import BasketCatalogButton from './basket/basket_catalog_button';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <Catalog products={products} />
        <br />
        <BasketCatalogButton />
      </div>
    );
  }
}

export default CatalogPage;
