import request from 'superagent';
import * as types from '~/constants/actionTypes/ProductsActionTypes';
import apiBase from '~/constants/apiBase';

const requestProducts = () => ({
  type: types.FETCH_PRODUCTS_REQUEST
});

const receiveProducts = (response) => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  response
});

const errorProducts = () => ({
  type: types.FETCH_PRODUCTS_ERROR
});

export function fetchProducts() {
  return (dispatch) => {
    dispatch(requestProducts());

    return request
      .get(`${apiBase}/products`)
      .end((err, response) => {
        err ? dispatch(errorProducts()) : dispatch(receiveProducts(response.body));
      });
  }
}
