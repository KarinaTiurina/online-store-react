import { basketPath }  from 'helpers/routes';
import BasketContainer from 'containers/BasketContainer';
import { fetchBasket } from 'actions/Basket';

export default {
  path: basketPath(),
  component: BasketContainer,
  exact: true,
  prepareData: (store) => {
    store.dispatch(fetchBasket());
  }
};
