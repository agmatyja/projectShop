import { connect } from 'react-redux';
import { getStore, getCart, getPromotion, addCartProduct, removeCartProduct, deleteCartProduct, addDiscountCode } from '../../../redux/ProductsRedux';
import Cart from './Cart';

const mapStateToProps = state => ({
  store: getStore(state),
  cart: getCart(state),
  promotion: getPromotion(state),
});

const mapDispatchToProps = dispatch => ({
  addCartProduct: (productId) => dispatch(addCartProduct(productId)),
  removeCartProduct: (productId) => dispatch(removeCartProduct(productId)),
  deleteCartProduct: (productId) => dispatch(deleteCartProduct(productId)),
  addDiscountCode: (percent) => dispatch(addDiscountCode(percent)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cart);