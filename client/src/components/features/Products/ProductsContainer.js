import { connect } from 'react-redux';
import { getProducts, getRequest, loadProductsByPageRequest, getPages, getPresentPage } from '../../../redux/ProductsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  pages: getPages(state),
  initialPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageRequest(page, productsPerPage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);