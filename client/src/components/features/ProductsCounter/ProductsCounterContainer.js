import { connect } from 'react-redux';
import { getProductsCount, loadProductsRequest } from '../../../redux/ProductsRedux';
import ProductsCounter from './ProductsCounter';

const mapStateToProps = state => ({
  productsCount: getProductsCount(state)
})

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCounter);