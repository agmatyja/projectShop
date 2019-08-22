import { connect } from 'react-redux';
import { getProduct, getRequest, loadProductRequest } from '../../../redux/ProductsRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
  product: getProduct(state),
  request: getRequest(state),
})

const mapDispatchToProps = dispatch => ({
  loadProduct: (id) => dispatch(loadProductRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);