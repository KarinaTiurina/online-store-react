import { assign } from 'lodash/object';
import * as types from '~/constants/actionTypes/BasketActionTypes';

const basketCountAndPrice = (basketItems) => {
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
  switch(action.type) {
    case types.FETCH_BASKET:
      return assign({}, initialState, { 
        item: action.basket, 
        count: basketCountAndPrice(action.basket).count,
        price: basketCountAndPrice(action.basket).price 
      });
    case types.ADD_TO_BASKET:
      return assign({}, initialState, { 
        item: action.basket,
        count: basketCountAndPrice(action.basket).count,
        price: basketCountAndPrice(action.basket).price 
      });
    case types.CLEAR_BASKET:
      return assign({}, initialState, {})
    default:
      return state;
  }
} 

export default basket;
