import { connect } from 'react-redux';
import BasketPage from '~/src/components/views/Basket';

const stateToProps = (state) => ({
  basket: state.basket.item
});

export default connect(stateToProps)(BasketPage);
