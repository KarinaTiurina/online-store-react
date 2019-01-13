import React, { Component } from 'react';

class BasketCatalogButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { itemsCount } = this.props;
    return (
      <button>Корзина ({itemsCount} шт.)</button>
    );
  }
};

export default BasketCatalogButton;
