import React, { Component, Fragment } from 'react';
import basketContext from '~/context/BasketContext';
import { Redirect } from 'react-router-dom';
import { catalogPath } from '~/src/helpers/routes';

class Basket extends Component {
  render() {
    let itemsCount = 0;
    let basketPrice = 0;
    const basketItems = this.context.basketItems;
    basketItems.map((item) => {
      basketPrice += item.price * item.count;
      itemsCount += item.count;
    });

    return (
      <div>
        { basketItems.length > 0 ? (
            <Fragment>
              <h3>Корзина - ${basketPrice.toFixed(2)} ({itemsCount} шт.)</h3>
              <ol>
                {
                  basketItems.map((item) => (
                    <li key={item.id}>{item.title} - ${(item.price*item.count).toFixed(2)} ({item.count} шт.)</li>
                  ))
                }
              </ol>
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

Basket.contextType = basketContext;

export default Basket;