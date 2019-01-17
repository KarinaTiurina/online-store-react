import { assign } from 'lodash/object';
import * as types from '~/constants/actionTypes/BasketActionTypes';

const basketCount = (basket) => {
  let itemsCount = 0;
  basket.map((item) => itemsCount += item.count);
  return itemsCount;
};

const initialState = {
  item: [],
  count: 0
};

const basket = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_BASKET:
      return assign({}, initialState, { 
        item: action.basket, 
        count: basketCount(action.basket) 
      });
    case types.ADD_TO_BASKET:
      return assign({}, initialState, { 
        item: action.basket,
        count: basketCount(action.basket) 
      }); 
    default:
      return state;
  }
} 

export default basket;
