import { connect } from 'react-redux';
import { getStore, getCart, getPromotion, cartPay } from '../../../redux/ProductsRedux';
import PaymentSummary from './PaymentSummary';

const mapStateToProps = state => ({
  store: getStore(state),
  cart: getCart(state),
  promotion: getPromotion(state),
});

const mapDispatchToProps = dispatch => ({
  cartPay: () => dispatch(cartPay()),
});


export default connect(mapStateToProps, mapDispatchToProps)(PaymentSummary);