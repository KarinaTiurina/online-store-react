import { connect } from 'react-redux';
import Catalog from '~/src/components/views/Catalog';
import { fetchBasket } from '~/src/actions/Basket';

const basketCount = (basket) => {
  let itemsCount = 0;
  basket.map((item) => itemsCount += item.count);
  return itemsCount;
};

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error,
  basketCount: basketCount(state.basket.item)
});

export default connect(stateToProps)(Catalog);
