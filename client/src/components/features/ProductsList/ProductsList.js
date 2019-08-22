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
      extraInfo: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      image: PropTypes.string,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inStore: PropTypes.number.isRequired,
    })
  )
};

export default ProductsList;