import ProductsContainer from '~/src/containers/ProductsContainer';
import { catalogPath }  from '~/src/helpers/routes';
import { fetchProducts } from '~/src/actions/Products';

export default {
  path: catalogPath(),
  component: ProductsContainer,
  exact: true,
  prepareData: (store) => {
    store.dispatch(fetchProducts());
  }
};
