import * as types from '~/constants/actionTypes/BasketActionTypes';
import { LOAD_BASKET, SAVE_BASKET, CLEAR_BASKET } from '~/src/middlewares/basket';

export function fetchBasket() {
  return {
    [LOAD_BASKET]: {
      types: [
        types.FETCH_BASKET
      ]
    }
  };
}

export function saveBasket(data) {
  return {
    [SAVE_BASKET]: {
      data: data,
      types: [
        types.ADD_TO_BASKET
      ]
    }
  };
}

export function clearBasket() {
  return {
    [CLEAR_BASKET]: {
      types: [
        types.CLEAR_BASKET
      ]
    }
  };
}
