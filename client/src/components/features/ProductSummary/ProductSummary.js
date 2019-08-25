import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import './ProductSummary.scss';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

const ProductSummary = ({ id, title, author, description, image, extraInfo, price, inCart }) => (
  <Link to={"/products/" + id}>
    <article className="product-summary">
      <SmallTitle>{title}</SmallTitle>
  	  <p>Author: {author}</p>
      <p>{extraInfo}</p>
      <img src={`data:image/jpeg;base64,${image}`} alt="cover" />
      <br/>
      <p>${price}</p>
    </article>
  </Link>
);

ProductSummary.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  extraInfo: PropTypes.string,
  price: PropTypes.number,
  inCart: PropTypes.bool.isRequired
};

export default ProductSummary;
