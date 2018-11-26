import React, { Component } from 'react';
import ProductList from './ProductList';
import BasketCatalogButton from './BasketCatalogButton';
import productsContext from '~/context/ProductsContext';
import { Link } from 'react-router-dom';
import { basketPath } from '~/src/helpers/routes';


class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const message = this.props.location.state;

    return (
      <div>
        { message &&
          <p className="warnMsg">{message}</p>
        }
        <h3>Каталог</h3>
        <ProductList products={this.context} />
        <br />
        <Link to={basketPath()}><BasketCatalogButton /></Link>
      </div>
    );
  }
}

Catalog.contextType = productsContext;

export default Catalog;
