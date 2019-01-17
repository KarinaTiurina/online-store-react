import { createStore, applyMiddleware, compose } from 'redux';
import APIMiddleware from '~/src/middlewares/API';
import BasketMiddleware from '~/src/middlewares/basket';
import reducers from '~/src/reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware, BasketMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
