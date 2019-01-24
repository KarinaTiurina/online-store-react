/* globals __CLIENT__ */
import { createStore, applyMiddleware, compose } from 'redux';
import APIMiddleware from 'middlewares/API';
import BasketMiddleware from 'middlewares/basket';
import reducers from 'reducers';

export default function(INITIAL_STATE = {}) {
  const composeEnhancers = __CLIENT__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

  return createStore(
    reducers,
    INITIAL_STATE,
    composeEnhancers(applyMiddleware(APIMiddleware, BasketMiddleware))
  );
}
