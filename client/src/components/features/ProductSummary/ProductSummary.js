import React from 'react';
import { PropTypes } from 'prop-types';
//import './ProductSummary.scss';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

const ProductSummary = ({ id, title, author, content }) => (
  <article className="product-summary">
    <SmallTitle>{title}</SmallTitle>
	<p>Author: {author}</p>
     
    <a href={"/products/" + id}>
	  <Button variant="primary">Read more</Button>
	</a>
  </article>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number
};

export default ProductSummary;
