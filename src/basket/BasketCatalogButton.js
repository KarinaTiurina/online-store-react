import React, { Component } from 'react';
import basketContext from '~/context/BasketContext';

class BasketCatalogButton extends Component {

  render() {
    let itemsCount = 0;
    this.context.basketItems.map((item) => itemsCount += item.count);
    return (
      <basketContext.Consumer>
        {
          (appState) => (
            <button>Корзина ({itemsCount})</button>
          )
        }
      </basketContext.Consumer>
    );
  }
};

BasketCatalogButton.contextType = basketContext;

export default BasketCatalogButton;
