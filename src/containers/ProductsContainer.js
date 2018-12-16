import { connect } from 'react-redux';
import Catalog from '~/src/components/views/Catalog';

const stateToProps = (state) => ({
  items: state.products.entries,
  isFetching: state.products.isFetching,
  error: state.products.error
});


export default connect(stateToProps)(Catalog);
