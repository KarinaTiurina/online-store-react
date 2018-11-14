import React, { Component } from 'react';
import Catalog from './Catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        <Catalog products={products} />
      </div>
    );
  }
}

export default CatalogPage;
