import { connect } from 'react-redux';
import Catalog from '~/src/components/views/Catalog';
import { fetchBasket } from '~/src/actions/Basket';

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error
});

const actionsToProps = (dispatch) => ({
  fetchBasket: data => dispatch(fetchBasket())
});

export default connect(stateToProps, actionsToProps)(Catalog);
