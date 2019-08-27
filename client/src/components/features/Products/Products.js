import React from 'react';
import { PropTypes } from 'prop-types';

import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Products extends React.Component {
  loadProductsPage = (page) => {
    const { loadProductsByPage, productsPerPage, sort } = this.props;
    loadProductsByPage(page, productsPerPage || 6, sort);
  }
  
  componentDidMount() {
    this.loadProductsPage(1);
  }

  render() {
    const { products, request, initialPage, pages, addCartProduct, removeCartProduct, deleteCartProduct } = this.props;
    if (products === null && !request.pending && !request.error) {
        this.loadProductsPage(initialPage);
        return <Spinner />;
    }
    if (!request.pending && request.success && products !== null && products.length > 0) {
        return <div>
          <ProductsList products={products} inCart={false} addCartProduct={addCartProduct} removeCartProduct={removeCartProduct} deleteCartProduct={deleteCartProduct} />
          <Pagination pages={pages} onPageChange={this.loadProductsPage} initialPage={initialPage || 1}/>
        </div>;
    }
    if (request.pending || request.success === null)
        return <Spinner />;
    if (!request.pending && request.error !== null && request.error !== undefined)
        return <Alert variant="error">{request.error}</Alert>;
    if (!request.pending && request.success && (products === null || products.length === 0)) 
        return <Alert variant="info">No products</Alert>;

    return <Spinner />;
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      extraInfo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
  loadProductsByPage: PropTypes.func.isRequired,
  addCartProduct: PropTypes.func.isRequired,
  removeCartProduct: PropTypes.func.isRequired,
  deleteCartProduct: PropTypes.func.isRequired,  
  initialPage: PropTypes.number,
  pages: PropTypes.number.isRequired,
  productsPerPage: PropTypes.number,
  sort: PropTypes.string,
};

export default Products;