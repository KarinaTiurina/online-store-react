import React, { Component } from 'react';
import Catalog from '~src/Catalog';
import BasketCatalogButton from '~/src/basket/BasketCatalogButton';

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
