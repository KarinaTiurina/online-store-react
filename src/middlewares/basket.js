import { assign } from 'lodash/object';
import { loadBasketState, saveBasketState, clearBasketState } from 'helpers/basket';
import { BASKET, LOAD_BASKET, SAVE_BASKET, CLEAR_BASKET } from 'constants/actionTypes/BasketActionTypes';

const nextAction = (action, data, actionType = BASKET) => (
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
  if (!action[BASKET]) return next(action);

  let basket = {};
  let requestType = null;

  if (action[BASKET].type === LOAD_BASKET) {
    [requestType] = [action[BASKET].type];
    basket = loadBasket(action);
  }

  if (action[BASKET].type === SAVE_BASKET) {
    [requestType] = [action[BASKET].type];
    basket = addToBasket(action[BASKET].data);
  }

  if (action[BASKET].type === CLEAR_BASKET) {
    [requestType] = [action[BASKET].type];
    basket = clearBasket();
  }

  next(nextAction(action, { basket, type: requestType }));

  return basket;
};