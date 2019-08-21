import { connect } from 'react-redux';
import { getRequest, addProducttRequest, resetRequest } from '../../../redux/ProductsRedux';
import ProductForm from './ProductForm';

const mapStateToProps = state => ({
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: (product) => dispatch(addProductRequest(post)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);