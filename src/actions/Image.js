import request from 'superagent';
import * as types from '~/constants/actionTypes/ImageActionTypes';
import apiBase from '~/constants/apiBase';

const requestImage = (id) => ({
  type: types.FETCH_IMAGE_REQUEST,
  id
});

const receiveImage = (response) => ({
  type: types.FETCH_IMAGE_SUCCESS,
  response
});

const errorImage = () => ({
  type: types.FETCH_IMAGE_ERROR
});

export function fetchImage(id) {
  return (dispatch) => {
    dispatch(requestImage(id));

    return request
      .get(`${apiBase}/images/${id}`)
      .end((err, response) => {
        err ? dispatch(errorImage()) : dispatch(receiveImage(response.body));
      });
  }
}
