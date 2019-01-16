import ProductsContainer from '~/src/containers/ProductsContainer';
import { catalogPath }  from '~/src/helpers/routes';
import { fetchProducts } from '~/src/actions/Products';
import { fetchBasket } from '~/src/actions/Basket';

export default {
  path: catalogPath(),
  component: ProductsContainer,
  exact: true,
  prepareData: (store) => {
    store.dispatch(fetchProducts());
    store.dispatch(fetchBasket());
  }
};
