import { connect } from 'react-redux';
import BasketCatalogButton from '~/src/components/views/Catalog/BasketCatalogButton';
import { fetchBasket } from '~/src/actions/Basket';

const stateToProps = (state) => ({});

const dispatchToProps = (dispatch) => ({
  fetchBasket: data => dispatch(fetchBasket())
});

export default connect(stateToProps, dispatchToProps)(BasketCatalogButton);
