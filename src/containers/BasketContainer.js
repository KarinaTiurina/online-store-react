import { connect } from 'react-redux';
import BasketPage from 'components/views/Basket';
import { clearBasket } from 'actions/Basket';

const stateToProps = (state) => ({
  basket: state.basket.item,  
  basketCount: state.basket.count,
  basketPrice: state.basket.price
});

const actionsToProps = (dispatch) => ({
  clearBasket: data => dispatch(clearBasket())
});

export default connect(stateToProps, actionsToProps)(BasketPage);
