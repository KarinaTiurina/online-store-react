import ProductsContainer from 'containers/ProductsContainer';
import { catalogPath }  from 'helpers/routes';
import { fetchProducts } from 'actions/Products';
import { fetchBasket } from 'actions/Basket';

export default {
  path: catalogPath(),
  component: ProductsContainer,
  exact: true,
  prepareData: (store) => {
    store.dispatch(fetchProducts());
    store.dispatch(fetchBasket());
  }
};
