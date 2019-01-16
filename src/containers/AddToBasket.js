import { connect } from 'react-redux';
import AddToBasket from '~/src/components/views/Catalog/ProductCard/AddToBasket';
import { saveBasket } from '~/src/actions/Basket';

const basketCount = (basket) => {
  let itemsCount = 0;
  basket.map((item) => itemsCount += item.count);
  return itemsCount;
};

const stateToProps = (state) => ({
  basketCount: basketCount(state.basket.item)
});

const actionsToProps = (dispatch) => ({
  addToBasket: data => dispatch(saveBasket(data))
});

export default connect(stateToProps, actionsToProps)(AddToBasket);
