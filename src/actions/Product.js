import request from 'superagent';
import * as types from '~/constants/actionTypes/ProductsActionTypes';
import apiBase from '~/constants/apiBase';

const requestProduct = (id) => ({
  type: types.FETCH_PRODUCT_REQUEST,
  id
});

const receiveProduct = (response) => ({
  type: types.FETCH_PRODUCT_SUCCESS,
  response
});

const errorProduct = () => ({
  type: types.FETCH_PRODUCT_FAILURE
});

export function fetchProduct(id) {
  return (dispatch) => {
    dispatch(requestProduct(id));

    return request
      .get(`${apiBase}/product/${id}`)
      .end((err, response) => {
        err ? dispatch(errorProduct()) : dispatch(receiveProduct(response.body));
      })
  }
}
