import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { catalogPath } from '~/src/helpers/routes';
import OrderForm from './OrderForm/OrderFormContainer';
import { prepareBasketToOrder } from '~/src/helpers/basket';

class Basket extends Component {
  render() {
    const { basket, basketCount, basketPrice, clearBasket } = this.props;

    return (
      <div>
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
