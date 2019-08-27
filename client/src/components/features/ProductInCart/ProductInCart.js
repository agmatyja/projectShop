import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import './ProductInCart.scss';
import cutText from '../../../utils/cutText';

import SmallTitle from '../../common/SmallTitle/SmallTitle';

const ProductInCart = ({ id, title, author, description, image, quantity, extraInfo, price, addCartProduct, removeCartProduct, deleteCartProduct }) => (
  <article className="product-in-cart relat">
    <Link to={"/products/" + id}>
      <div className="first">
        <img src={`data:image/jpeg;base64,${image}`} alt="cover" />
        <span className="extra">{extraInfo}</span><br/>
      </div>
      <div className="second">
        <SmallTitle>{title}</SmallTitle>
  	    <p className="author">{author}</p>
        <p className="description">{cutText(description, 250)}</p>
        <p className="price">Price: ${price}</p>
      </div>
    </Link>
    <p className="quantity">
      <span>Quantity: </span>
      <button className="remove-button" onClick={() => removeCartProduct(id)}>-</button>
      <span>{quantity}</span>
      <button className="add-button" onClick={() => addCartProduct(id)}>+</button> 
      <button className="delete-button" onClick={() => deleteCartProduct(id)}>Remove product</button>
    </p>
  </article>
);

ProductInCart.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  extraInfo: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  addCartProduct: PropTypes.func,
  removeCartProduct: PropTypes.func,
  deleteCartProduct: PropTypes.func,
};

export default ProductInCart;
