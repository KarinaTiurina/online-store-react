import { connect } from 'react-redux';
import AddToBasket from 'components/views/Catalog/ProductCard/AddToBasket';
import { saveBasket } from 'actions/Basket';

const stateToProps = (state) => ({
  basketCount: state.basket.count
});

const actionsToProps = (dispatch) => ({
  addToBasket: data => dispatch(saveBasket(data))
});

export default connect(stateToProps, actionsToProps)(AddToBasket);
