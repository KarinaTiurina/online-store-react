import { combineReducers } from 'redux';
import products from './Products';
import product from './Product';
import image from './Image';

export default combineReducers({
  products,
  product,
  image
});
