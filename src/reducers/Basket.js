import { assign } from 'lodash/object';
import * as types from '~/constants/actionTypes/BasketActionTypes';

const basketCountAndPrice = (actionBasket) => {
  const basketItems = [...actionBasket];
  let itemsCount = 0;
  let basketPrice = 0;
  basketItems.map((item) => {
    itemsCount += item.count
    basketPrice += item.price * item.count;
  });
      
  return {count: itemsCount, price: basketPrice};
};

const initialState = {
  item: [],
  count: 0,
  price: 0
};

const basket = (state = initialState, action) => {
  let basketInfo = {};
  if (action.type in types) {
    basketInfo = basketCountAndPrice(action.basket);
  }
  switch(action.type) {
    case types.LOAD_BASKET:
      return assign({}, initialState, { 
        item: action.basket, 
        count: basketInfo.count,
        price: basketInfo.price 
      });
    case types.SAVE_BASKET:
      return assign({}, initialState, { 
        item: action.basket,
        count: basketInfo.count,
        price: basketInfo.price 
      });
    case types.CLEAR_BASKET:
      return assign({}, initialState, {})
    default:
      return state;
  }
} 

export default basket;
