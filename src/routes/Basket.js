import BasketPage from '~/src/components/views/Basket';
import { basketPath }  from '~/src/helpers/routes';

export default {
  path: basketPath(),
  component: BasketPage,
  exact: true
};
