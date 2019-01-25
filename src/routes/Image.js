import React from 'react';
import { fetchImage } from 'actions/Image';
import ImageContainer from 'containers/ImageContainer';
import { imagePath }  from 'helpers/routes';

export default {
  path: imagePath(),
  component: ImageContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchImage(params.id));
  }
};
