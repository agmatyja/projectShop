import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './ProductSummary.scss';

import SmallTitle from '../../common/SmallTitle/SmallTitle';

const ProductSummary = ({ id, title, author, description, image, quantity, extraInfo, price, addCartProduct, removeCartProduct, deleteCartProduct }) => {
  return (
    <article className={`product-summary relat${quantity > 0 ? ' bought' : ''}`}>
      <Link to={"/products/" + id}>
        <div className="first">
          <img src={`data:image/jpeg;base64,${image}`} alt="cover" />
          <span className="extra">{extraInfo}</span><br/>
        </div>
        <div className="second">
          <SmallTitle>{title}</SmallTitle>
          <p className="author">{author}</p>
          <p className="price">Price: ${price}</p>
          {quantity > 0 ? <p className="quantity">Quantity: {quantity}</p> : null}
        </div>
      </Link>
    </article>
  );
};

ProductSummary.propTypes = {
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

export default ProductSummary;
