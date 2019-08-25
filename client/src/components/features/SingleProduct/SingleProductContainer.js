import { connect } from 'react-redux';
import { getProduct, getRequest, loadProductRequest, addCartProduct } from '../../../redux/ProductsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
  product: getProduct(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  loadProduct: (id) => dispatch(loadProductRequest(id)),
  addCartProduct: (productId) => dispatch(addCartProduct(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);