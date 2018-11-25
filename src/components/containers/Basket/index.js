import React, { Component } from 'react';
import basketContext from '~/context/BasketContext';

class Basket extends Component {
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
        {this.props.children}
      </basketContext.Provider>
    );
  }
}

export default Basket;
