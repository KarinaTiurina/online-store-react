import React, { Component } from 'react';
import Navigation from '~/src/components/views/Navigation';
import basketContext from '~/context/BasketContext';
import productsContext from '~/context/ProductsContext';
import products from '~/constants/products';

class App extends Component {
  constructor(props) {
    super(props);

    const basketItems = [];

    this.addToBasket = (data) => {
      const basketItems = [...this.state.basketItems, data];
      this.setState({basketItems});
    };

    this.state = { basketItems, addToBasket: this.addToBasket };
  }

  render() {
    return (
      <basketContext.Provider value={this.state}>
        <productsContext.Provider value={products}>
          <Navigation />
        </productsContext.Provider>
      </basketContext.Provider>
    );
  }
}

export default App;
