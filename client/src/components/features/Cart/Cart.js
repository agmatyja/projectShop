import React from 'react';
import { PropTypes } from 'prop-types/prop-types';

import ProductsList from '../ProductsList/ProductsList';
import Alert from '../../common/Alert/Alert';
import { withRouter } from 'react-router-dom';

class Cart extends React.Component {

  render() {
    const { store, cart } = this.props;
    let products = cart.map(item => {return {...store[item.id], quantity: item.quantity}});

    return <div>
      <ProductsList products={products} inCart={true} />
    </div>;
  }
}

Cart.propTypes = {
  store: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    extraInfo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
	  author: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
  cart: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
  addCartProduct: PropTypes.func.isRequired,
  removeCartProduct: PropTypes.func.isRequired,
  deleteCartProduct: PropTypes.func.isRequired,
  addPromotionCartProduct: PropTypes.func.isRequired,
  cartPay: PropTypes.func.isRequired,
};

export default withRouter(props => <Cart {...props}/>);