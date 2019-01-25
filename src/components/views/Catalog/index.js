import React, { Component } from 'react';
import ProductList from './ProductList';
import BasketCatalogButton from './BasketCatalogButton';
import { Link } from 'react-router-dom';
import { basketPath } from 'helpers/routes';
import request from 'superagent';
import Helmet from 'react-helmet';
import apiBase from 'constants/apiBase.js';

class Catalog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const message = this.props.location.state;
    const products = this.props.items;

    return (
      <div>
        <Helmet>
          <title>Каталог</title>
          <meta name="description" content="Каталог" />
          <link rel="shortcut icon" href="https://static.thenounproject.com/png/32240-200.png" />
          <meta name="keywords" content="Онлайн-магазин Online Store" />
        </Helmet>
        { message &&
          <p className="warnMsg">{message}</p>
        }
        <h3>Каталог</h3>
        <ProductList products={products} />
        <br />
        <Link to={basketPath()}><BasketCatalogButton itemsCount={this.props.basketCount} /></Link>
      </div>
    );
  }
}

export default Catalog;
