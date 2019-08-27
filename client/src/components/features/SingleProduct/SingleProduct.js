import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import './SingleProduct.scss';
import { withRouter } from 'react-router-dom';

class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct(this.props.id);
  }

  addToCart = () => {
    const { product, addCartProduct, history } = this.props;
    addCartProduct(product.id);
    history.push('/added')
  }

  render() {
    const { product, request } = this.props;
   
    if (!request.pending && request.success && product) 
        return (
          <article className="single-product">
            <div className="first"><img src={`data:image/jpeg;base64,${product.image}`} alt="cover"/></div>
            <div className="second">
              <h2>{product.title}</h2>
              <h2>{product.extraInfo}</h2>
              <b>{product.author}</b><br/>
              <br/>
              <HtmlBox>{product.description.replace(/\n/g,"<br />")}</HtmlBox>
              <b className="price">${product.price}</b><br/>
              <br/><br/><button onClick={this.addToCart}>Add to cart</button>  
            </div>
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
  addCartProduct: PropTypes.func.isRequired,

  id: PropTypes.string
};

export default withRouter(props => <SingleProduct {...props}/>);