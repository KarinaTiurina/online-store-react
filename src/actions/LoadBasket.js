import * as types from '~/constants/actionTypes/BasketActionTypes';
import { LOAD_BASKET } from '~/src/middlewares/basket';

export function fetchBasket() {
  return {
    [LOAD_BASKET]: {
      types: [
        types.FETCH_BASKET
      ]
    }
  };
}
