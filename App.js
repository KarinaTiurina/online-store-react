import React, { Component } from 'react';
import basketContext from './context/BasketContext';
import CatalogPage from '~/src/CatalogPage';
import products from '~/constants/products';
import basketItems from '~/constants/basketItems';

class App extends Component {
  constructor(props) {
    super(props);

    this.addToBasket = (data, count) => {
      const basketItems = [...this.state.basketItems, data];
      this.setState({basketItems});
    };

    this.state = { basketItems, addToBasket: this.addToBasket };
  }

  render() {
    return (
      <basketContext.Provider value={this.state}>
        <CatalogPage products={products} />
      </basketContext.Provider>
    );
  }
}

export default App;
