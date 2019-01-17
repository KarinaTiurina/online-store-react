import { assign } from 'lodash/object';
import { loadBasketState, saveBasketState, clearBasketState } from '~/src/helpers/basket';

export const LOAD_BASKET = 'LOAD_BASKET';
export const SAVE_BASKET = 'SAVE_BASKET';
export const CLEAR_BASKET = 'CLEAR_BASKET';

const nextAction = (action, data, actionType = LOAD_BASKET) => (
  assign({}, action, data, {[actionType]: undefined})
);

const loadBasket = () => {
  return loadBasketState();
};

const addToBasket = (data) => {
  const currentBasket = loadBasketState();
  currentBasket.push(data);
  saveBasketState(currentBasket);
  return currentBasket;
};

const clearBasket = () => {
  clearBasketState();

  return [];
};

export default (store) => (next) => (action) => {
  if (!action[LOAD_BASKET] && !action[SAVE_BASKET] && !action[CLEAR_BASKET]) return next(action);

  let basket = {};
  let requestType = null;

  if (action[LOAD_BASKET]) {
    [requestType] = action[LOAD_BASKET].types;
    basket = loadBasket(action);
  }

  if (action[SAVE_BASKET]) {
    [requestType] = action[SAVE_BASKET].types;
    basket = addToBasket(action[SAVE_BASKET].data);
  }

  if (action[CLEAR_BASKET]) {
    [requestType] = action[CLEAR_BASKET].types;
    basket = clearBasket();
  }

  next(nextAction(action, { basket, type: requestType }));

  return basket;
};