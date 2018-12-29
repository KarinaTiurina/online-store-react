import React from 'react';
import { fetchImage } from '~/src/actions/Image';
import ImageContainer from '~/src/containers/ImageContainer';
import { imagePath }  from '~/src/helpers/routes';

// import ImagePage from '~/src/components/views/Image';

export default {
  path: imagePath(),
  component: ImageContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchImage(params.id));
  }
};
