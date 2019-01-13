import { connect } from 'react-redux';
import AddToBasket from '~/src/components/views/Catalog/ProductCard/AddToBasket';
import { addToBasket } from '~/src/actions/Basket';

const stateToProps = (state) => ({});

const actionsToProps = (dispatch) => ({
  addToBasket: data => dispatch(addToBasket(data))
});

export default connect(stateToProps, actionsToProps)(AddToBasket);
