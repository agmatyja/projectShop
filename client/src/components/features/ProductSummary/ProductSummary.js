import React from 'react';
import { PropTypes } from 'prop-types';
import './ProductSummary.scss';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

const ProductSummary = ({ id, title, author, description }) => (
  <article className="product-summary">
    <SmallTitle>{title}</SmallTitle>
	<p>Author: {author}</p>
  </article>
);
/*

  <a href={"/products/" + id}>
    <Button variant="primary">Add to cart</Button>
  </a>
*/

ProductSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  inStore: PropTypes.number
};

export default ProductSummary;
