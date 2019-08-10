import React from 'react';
import { PropTypes } from 'prop-types';

import ProductSummary from '../ProductSummary/ProductSummary';

class ProductsList extends React.Component {
	
  render () {
	const { products } = this.props;
	return <div>
        <section className="products-list">
          {products.map(product => <ProductSummary key={product.id} {...product} />)}
        </section>
      </div>;
  };

};

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.Number.isRequired,
    })
  )
};

export default ProductsList;