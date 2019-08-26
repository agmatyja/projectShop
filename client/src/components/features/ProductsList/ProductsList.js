import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductsList.scss';


import ProductSummary from '../ProductSummary/ProductSummary';

class ProductsList extends React.Component {
	
  render () {
    const { products, inCart, addCartProduct, removeCartProduct, deleteCartProduct } = this.props;
    return (
      <div>
        <section className="products-list">
          {products.map(product => 
            <ProductSummary 
              key={product.id} 
              inCart={inCart} 
              addCartProduct={addCartProduct} 
              removeCartProduct={removeCartProduct} 
              deleteCartProduct={deleteCartProduct} 
              {...product} 
            />
          )}
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
  inCart: PropTypes.bool.isRequired,
  addCartProduct: PropTypes.func,
  removeCartProduct: PropTypes.func,
  deleteCartProduct: PropTypes.func,
};

export default ProductsList;