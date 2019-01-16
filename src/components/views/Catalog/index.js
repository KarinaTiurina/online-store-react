import React, { Component } from 'react';
import ProductList from './ProductList';
import BasketCatalogButton from './BasketCatalogButton';
import { Link } from 'react-router-dom';
import { basketPath } from '~/src/helpers/routes';
import request from 'superagent';
import apiBase from '~/constants/apiBase.js';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const message = this.props.location.state;
    const products = this.props.items;

    return (
      <div>
        { message &&
          <p className="warnMsg">{message}</p>
        }
        <h3>Каталог</h3>
        <ProductList
          products={products}
          updateBasketCount={this.updateCount}
        />
        <br />
        <Link to={basketPath()}><BasketCatalogButton itemsCount={this.props.basketCount} /></Link>
      </div>
    );
  }
}

export default Catalog;
