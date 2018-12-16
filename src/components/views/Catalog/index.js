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

    this.state = { products: [] }

    console.log(this.props);
  }

  componentDidMount() {
    request
      .get(`http://${apiBase}/products`)
      .then(({body}) => this.setState({products: body}));
  }

  render() {
    const message = this.props.location.state;
    const { products } = this.state;

    return (
      <div>
        { message &&
          <p className="warnMsg">{message}</p>
        }
        <h3>Каталог</h3>
        <ProductList products={products} />
        <br />
        <Link to={basketPath()}><BasketCatalogButton /></Link>
      </div>
    );
  }
}

export default Catalog;
