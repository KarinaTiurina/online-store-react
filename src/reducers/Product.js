import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/ProductActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

const product = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_PRODUCT_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_PRODUCT_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_PRODUCT_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    default:
      return state;
  }
}

export default product;
