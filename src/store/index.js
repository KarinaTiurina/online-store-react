import { createStore, applyMiddleware, compose } from 'redux';
import APIMiddleware from '~/src/middlewares/API';
import reducers from '~/src/reducers';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(APIMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
