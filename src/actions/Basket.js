import * as types from '~/constants/actionTypes/BasketActionTypes';

export function fetchBasket() {
  return {
    [types.BASKET]: {
      type: types.LOAD_BASKET
    }
  };
}

export function saveBasket(data) {
  return {
    [types.BASKET]: {
      data: data,
      type: types.SAVE_BASKET
    }
  };
}

export function clearBasket() {
  return {
    [types.BASKET]: {
      type: types.CLEAR_BASKET
    }
  };
}
