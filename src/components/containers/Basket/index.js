import React, { Component } from 'react';
import basketContext from '~/context/BasketContext';
import { saveBasketState } from '~/src/helpers/basket';

class Basket extends Component {
  constructor(props) {
    super(props);

    const basketItems = [];

    this.addToBasket = (data) => {
      const basketItems = [...this.state.basketItems, data];
      this.setState({basketItems});
      saveBasketState(basketItems);
    };

    this.state = { basketItems, addToBasket: this.addToBasket };
  }

  render() {
    return (
      <basketContext.Provider value={this.state}>
        {this.props.children}
      </basketContext.Provider>
    );
  }
}

export default Basket;
