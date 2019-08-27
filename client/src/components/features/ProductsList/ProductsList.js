import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductsList.scss';

import ProductInCart from '../ProductInCart/ProductInCart';
import ProductSummary from '../ProductSummary/ProductSummary';

class ProductsList extends React.Component {
	
  render () {
    const { products, inCart, addCartProduct, removeCartProduct, deleteCartProduct } = this.props;
    return (
      <div>
        <section className="products-list">
          {products.map(product => 
            inCart
            ? <ProductInCart 
              key={product.id} 
              addCartProduct={addCartProduct} 
              removeCartProduct={removeCartProduct} 
              deleteCartProduct={deleteCartProduct} 
              {...product} 
            />
            : <ProductSummary 
              key={product.id} 
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