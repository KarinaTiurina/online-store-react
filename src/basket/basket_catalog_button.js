import React, { Component } from 'react';
import basketContext from '~/context/basket_context';

const BasketCatalogButton = () => (
  <basketContext.Consumer>
    {
      (appState) => (
        <button>Корзина ({appState.basket.count})</button>
      )
    }
  </basketContext.Consumer>
);

export default BasketCatalogButton;
