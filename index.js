import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CatalogPage from '~/src/CatalogPage';
import products from '~/constants/products'

class App extends Component {
  constructor(props) {
    super(props)

    this.products = products;
  }

  render() {
    const { products } = this;

    return (
      <div>
        <CatalogPage products={products} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
