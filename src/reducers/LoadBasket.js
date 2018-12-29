import { assign } from 'lodash/object';
import * as types from '~/constants/actionTypes/BasketActionTypes';

const initialState = {
  item: []
};

const basket = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_BASKET:
      return assign({}, initialState, { item: action.basket });
    default:
      return state;
  }
} 

export default basket;
