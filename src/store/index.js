import { createStore, applyMiddleware, compose } from 'redux';
import APIMiddleware from 'middlewares/API';
import BasketMiddleware from 'middlewares/basket';
import reducers from 'reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware, BasketMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
