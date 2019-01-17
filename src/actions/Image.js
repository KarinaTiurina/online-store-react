import * as types from '~/constants/actionTypes/ImageActionTypes';
import { API_CALL } from '~/src/middlewares/API';

export function fetchImage(id) {
  return {
    [API_CALL]: {
      endpoint: `/images/${id}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_IMAGE_REQUEST,
        types.FETCH_IMAGE_SUCCESS,
        types.FETCH_IMAGE_ERROR
      ]
    }
  };
}
