import { assign } from 'lodash/object';
import * as types from '~/constants/actionTypes/BasketActionTypes';
import { addToBasket } from '~/src/helpers/basket';

const initialState = {
  item: []
};

const basket = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_BASKET:
      return assign({}, initialState, { item: action.basket });
    case types.ADD_TO_BASKET:
      return addToBasket(action.data)
    default:
      return state;
  }
} 

export default basket;
