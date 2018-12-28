import { connect } from 'react-redux';
import ImagePage from '~/src/components/views/Image';

const stateToProps = (state) => ({
  item: state.image.entry,
  isFetching: state.image.isFetching,
  error: state.image.error
});

export default connect(stateToProps)(ImagePage);
 