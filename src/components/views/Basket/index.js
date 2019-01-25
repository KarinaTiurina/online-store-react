import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';

import { catalogPath } from 'helpers/routes';
import OrderForm from './OrderForm/OrderFormContainer';

const prepareBasketToOrder = (basketItems) => {
  const basketToOrder = [];

  basketItems.map((item) => (
    basketToOrder.push({
      productId: item.id,
      count: item.count,
      pricePerProduct: item.price
    })
  ));

  return basketToOrder;
};

class Basket extends Component {
  render() {
    const { basket, basketCount, basketPrice, clearBasket } = this.props;

    return (
      <div>
        <Helmet>
          <title>Корзина</title>
          <meta name="description" content="Страница корзины" />
          <link rel="shortcut icon" href="data:image/png;base64,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" />
          <meta name="keywords" content="Онлайн-магазин Online Store" />
        </Helmet>
        { basket.length > 0 ? (
            <Fragment>
              <h3>Корзина - ${basketPrice.toFixed(2)} ({basketCount} шт.)</h3>
              <ol>
                {
                  basket.map((item, i) => (
                    <li key={i}>{item.title} - ${(item.price*item.count).toFixed(2)} ({item.count} шт.)</li>
                  ))
                }
              </ol>
              <h3>Оформить заказ</h3>
              <OrderForm basketItems={prepareBasketToOrder(basket)}
                         clearBasket={clearBasket}
              />
            </Fragment>
          ) : (
            <Redirect to={{
                        pathname: catalogPath(),
                        state: 'Корзина пустая.'
                      }} />
          )
        }
      </div>
    );
  }
}

export default Basket;
