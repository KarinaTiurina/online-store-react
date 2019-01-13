import React, { Component } from 'react';

class BasketCatalogButton extends Component {
  render() {
    const basketItems = this.props.fetchBasket();
    let itemsCount = 0;
    basketItems.map((item) => itemsCount += item.count);
    return (
      <button>Корзина ({itemsCount} шт.)</button>
    );
  }
};

export default BasketCatalogButton;
