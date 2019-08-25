import { connect } from 'react-redux';
import { getProducts, getRequest, loadProductsByPageRequest, getPages, getPresentPage, getSort, addCartProduct, removeCartProduct, deleteCartProduct } from '../../../redux/ProductsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  pages: getPages(state),
  initialPage: getPresentPage(state),
  sort: getSort(state)
});

const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage, sort) => dispatch(loadProductsByPageRequest(page, productsPerPage, sort)),
  addCartProduct: (id) => dispatch(addCartProduct(id)),
  removeCartProduct: (id) => dispatch(removeCartProduct(id)),
  deleteCartProduct: (id) => dispatch(deleteCartProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);