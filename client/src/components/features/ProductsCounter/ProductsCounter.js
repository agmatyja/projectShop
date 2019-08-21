import React from 'react';
import { PropTypes } from 'prop-types';

class ProductsCounter extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
	const { productsCount } = this.props;  
    return (
      <div>Products amount: {productsCount === 0 ? "no products" : productsCount}</div>
    );
  }

};

ProductsCounter.propTypes = {
  productsCount: PropTypes.number.isRequired,
  loadProducts: PropTypes.func.isRequired,
};
export default ProductsCounter;