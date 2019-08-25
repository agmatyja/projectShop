import React from 'react';
import { PropTypes } from 'prop-types/prop-types';

import ProductsList from '../ProductsList/ProductsList';
import Alert from '../../common/Alert/Alert';
import { withRouter } from 'react-router-dom';

class Cart extends React.Component {
  onCartPay = () => {
    const { cartPay } = this.props;
    cartPay();
  }

  render() {
    const { store, cart, addCartProduct, removeCartProduct, deleteCartProduct } = this.props;
    if (cart.length === 0) 
      return <div>The cart is empty.</div>
    console.log(cart);
    let products = cart.map(item => {
      return {...store[item.productId], quantity: item.quantity}}
    );
    return <div>
      <ProductsList products={products} inCart={true} addCartProduct={addCartProduct} removeCartProduct={removeCartProduct} deleteCartProduct={deleteCartProduct} />
      <button onClick={this.onCartPay}>Proceed to payment</button>
    </div>;
  }
}

Cart.propTypes = {
  store: PropTypes.object,
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