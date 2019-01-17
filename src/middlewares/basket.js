import { assign } from 'lodash/object';
import { loadBasketState, saveBasketState } from '~/src/helpers/basket';

export const LOAD_BASKET = 'LOAD_BASKET';
export const SAVE_BASKET = 'SAVE_BASKET';

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

export default (store) => (next) => (action) => {
  if (!action[LOAD_BASKET] && !action[SAVE_BASKET]) return next(action);

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

  next(nextAction(action, { basket, type: requestType }));

  return basket;
};