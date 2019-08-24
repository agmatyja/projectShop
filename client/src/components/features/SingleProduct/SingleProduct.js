import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

import { withRouter } from 'react-router-dom';

class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct(this.props.id);
  }

  render() {
    const { product, request } = this.props;
	 
    if (!request.pending && request.success && product) 
        return (
          <article className="single-product">
            <h2>{product.title}</h2>
            <b>{product.author}</b><br/>
            ${product.price}
            <img src={`data:image/jpeg;base64,${product.image}`} alt="cover"/>
            {product.description}
          </article>
    		);
    if (request.pending || request.success === null)
        return <Spinner />;
    if (!request.pending && request.error !== null && request.error !== undefined)
        return <Alert variant="error">{request.error}</Alert>;
    if (!request.pending && request.success && !product) 
        return <Alert variant="info">No product</Alert>;
    return <Spinner />;
  }
}


SingleProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    extraInfo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
	  author: PropTypes.string.isRequired,
    image: PropTypes.string,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
  loadProduct: PropTypes.func.isRequired,
  id: PropTypes.string
};

export default withRouter(props => <SingleProduct {...props}/>);