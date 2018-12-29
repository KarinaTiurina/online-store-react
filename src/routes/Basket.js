import { basketPath }  from '~/src/helpers/routes';
import BasketContainer from '~/src/containers/BasketContainer';
import { fetchBasket } from '~/src/actions/LoadBasket';

export default {
  path: basketPath(),
  component: BasketContainer,
  exact: true,
  prepareData: (store) => {
    store.dispatch(fetchBasket());
  }
};
