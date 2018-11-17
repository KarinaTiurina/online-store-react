import React, { Component } from 'react';
import basketContext from './context/basket_context';
import CatalogPage from '~/src/CatalogPage';
import products from '~/constants/products';
import basket from '~/constants/basket';

class App extends Component {
  constructor(props) {
    super(props);

    this.addToBasket = (data, count) => {
      const basket = {...this.state.basket};
      basket.items.push({data, count});
      basket.count += count;
      this.setState({basket});
    };

    this.state = { basket, addToBasket: this.addToBasket };
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
