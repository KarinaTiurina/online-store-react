import { combineReducers } from 'redux';
import products from './Products';
import product from './Product';

export default combineReducers({
  products,
  product
});
