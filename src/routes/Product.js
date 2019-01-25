import React from 'react';
import { fetchProduct } from 'actions/Product';
import ProductContainer from 'containers/ProductContainer';
import { productPath }  from 'helpers/routes';

export default {
  path: productPath(),
  component: ProductContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchProduct(params.id));
  }
};
