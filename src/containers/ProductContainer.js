import { connect } from 'react-redux';
import Product from '~/src/components/views/Product';

const stateToProps = (state) => ({
  item: state.product.entry,
  isFetching: state.product.isFetching,
  error: state.product.error
});

export default connect(stateToProps)(Product);
 