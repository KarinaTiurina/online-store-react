import React from 'react';
import { fetchProduct } from '~/src/actions/Product';
import ProductContainer from '~/src/containers/ProductContainer';
import { productPath }  from '~/src/helpers/routes';

export default {
  path: productPath(),
  component: ProductContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchProduct(params.id));
  }
};
