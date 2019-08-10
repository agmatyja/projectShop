import { connect } from 'react-redux';
import { getRequest, addProductRequest, resetRequest } from '../../../redux/ProductsRedux';
import ProductForm from './ProductForm';

const mapStateToProps = state => ({
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: (post) => dispatch(addProductRequest(post)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);