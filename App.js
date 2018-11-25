import React, { Component } from 'react';
import Navigation from '~/src/components/views/Navigation';
import Basket from '~/src/components/containers/Basket';
import productsContext from '~/context/ProductsContext';
import products from '~/constants/products';

class App extends Component {
  render() {
    return (
      <productsContext.Provider value={products}>
        <Basket>
          <Navigation />
        </Basket>
      </productsContext.Provider>
    );
  }
}

export default App;
