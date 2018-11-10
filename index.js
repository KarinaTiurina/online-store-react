import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Catalog from '~/src/Catalog';
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
        <Catalog products={products} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
