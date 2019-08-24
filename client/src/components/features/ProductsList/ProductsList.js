import React from 'react';
import { PropTypes } from 'prop-types';

import ProductSummary from '../ProductSummary/ProductSummary';

class ProductsList extends React.Component {
	
  render () {
    const { products, inCart } = this.props;
    return (
      <div>
        <section className="products-list">
          {products.map(product => <ProductSummary key={product.id} inCart={inCart} {...product} />)}
        </section>
      </div>
    );
  };
};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      extraInfo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ),
  inCart: PropTypes.bool.isRequired
};

export default ProductsList;