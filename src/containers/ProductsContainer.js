import { connect } from 'react-redux';
import Catalog from '~/src/components/views/Catalog';
import { fetchBasket } from '~/src/actions/Basket';

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error,
  basketCount: state.basket.count
});

export default connect(stateToProps)(Catalog);
