import { assign } from 'lodash/object';
import * as types from 'constants/actionTypes/ImageActionTypes';

const initialState = {
  isFetching: false,
  error: false,
  entry: null
};

const image = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_IMAGE_REQUEST:
      return assign({}, initialState, { isFetching: true });
    case types.FETCH_IMAGE_ERROR:
      return assign({}, initialState, { error: true });
    case types.FETCH_IMAGE_SUCCESS:
      return assign({}, initialState, { entry: action.response });
    default:
      return state;
  }
}

export default image;
