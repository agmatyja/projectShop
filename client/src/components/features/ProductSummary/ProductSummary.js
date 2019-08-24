import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductSummary.scss';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

const ProductSummary = ({ id, title, author, description, image, extraInfo, price, inCart }) => (
  <article className="product-summary">
    <SmallTitle>{title}</SmallTitle>
	  <p>Author: {author}</p>
    <p>{extraInfo}</p>
    <img src={`data:image/jpeg;base64,${image}`} alt="cover" />
    <p>${price}</p>
  </article>
);
/*
  <a href={"/products/" + id}>
    <Button variant="primary">Add to cart</Button>
  </a>
*/

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
