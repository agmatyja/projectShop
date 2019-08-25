import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './ProductSummary.scss';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

const ProductSummary = ({ id, title, author, description, image, quantity, extraInfo, price, inCart, addCartProduct, removeCartProduct, deleteCartProduct }) => (
  <article className="product-summary">
    <Link to={"/products/" + id}>
      <SmallTitle>{title}</SmallTitle>
  	  <p>Author: {author}</p>
      <p>{extraInfo}</p>
      <img src={`data:image/jpeg;base64,${image}`} alt="cover" />
      <br/>
      <p>Price: ${price}</p>
    </Link>
    {inCart
      ? <p>
          <span>Quantity: {quantity}</span>
          <button onClick={() => addCartProduct(id)}>+</button> 
          <button onClick={() => removeCartProduct(id)}>-</button>
          <button onClick={() => deleteCartProduct(id)}>x</button>
        </p>
      : null}
  </article>
);

ProductSummary.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  extraInfo: PropTypes.string,
  price: PropTypes.number,
  inCart: PropTypes.bool.isRequired,
  quantity: PropTypes.number,
  addCartProduct: PropTypes.func,
  removeCartProduct: PropTypes.func,
  deleteCartProduct: PropTypes.func,
};

export default ProductSummary;
