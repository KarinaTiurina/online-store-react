import { connect } from 'react-redux';
import BasketPage from '~/src/components/views/Basket';
import { clearBasket } from '~/src/actions/Basket';

const stateToProps = (state) => ({
  basket: state.basket.item,  
  basketCount: state.basket.count,
  basketPrice: state.basket.price
});

const actionsToProps = (dispatch) => ({
  clearBasket: data => dispatch(clearBasket())
});

export default connect(stateToProps, actionsToProps)(BasketPage);
