import { assign } from 'lodash/object';
import { loadBasketState } from '~/src/helpers/basket';

export const LOAD_BASKET = 'LOAD_BASKET';

const nextAction = (action, data) => (
  assign({}, action, data, {[LOAD_BASKET]: undefined})
);

export default (store) => (next) => (action) => {
  if (!action[LOAD_BASKET]) return next(action);

  const [requestType] = action[LOAD_BASKET].types;

  const basket = loadBasketState();

  next(nextAction(action, { basket, type: requestType }));

  return basket;
};