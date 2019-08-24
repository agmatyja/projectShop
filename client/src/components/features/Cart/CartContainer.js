import { connect } from 'react-redux';
import { getStore, getCart, addCartProduct, removeCartProduct, deleteCartProduct, addPromotionCartProduct, cartPay } from '../../../redux/ProductsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
  store: getStore(state),
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  addCartProduct: (productId) => dispatch(addCartProduct(productId)),
  removeCartProduct: (productId) => dispatch(removeCartProduct(productId)),
  deleteCartProduct: (productId) => dispatch(deleteCartProduct(productId)),
  addPromotionCartProduct: (percent) => dispatch(addPromotionCartProduct(percent)),
  cartPay: () => dispatch= () => dispatch(cartPay()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cart);