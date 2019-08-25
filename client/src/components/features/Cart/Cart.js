import React from 'react';
import { PropTypes } from 'prop-types/prop-types';
import { withRouter } from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import ProductsList from '../ProductsList/ProductsList';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: ''
    };
  }

  cartPay = () => {
    const { cartPay } = this.props;
    cartPay();
  }

  addCartProduct = (id) => {
    const { addCartProduct } = this.props;
    addCartProduct(id);
    ToastsStore.success('Item added to the cart')    
  }

  removeCartProduct = (id) => {
    const { removeCartProduct } = this.props;
    removeCartProduct(id);
    ToastsStore.warning('Item removed from the cart')    
  }

  deleteCartProduct = (id) => {
    const { deleteCartProduct } = this.props;
    deleteCartProduct(id);
    ToastsStore.warning('Item removed from the cart')    
  }

  promoCodeChanged = (e) => {
    const { addDiscountCode } = this.props;
    this.setState({
      promoCode: e.target.value
    });

    if (e.target.value === 'promo') {
      addDiscountCode(10)
      ToastsStore.success('Discount code added! Now use have 10% discount!');
    }
  }

  render() {
    const { store, cart, promotion } = this.props;

    if (cart.length === 0) 
      return <div>The cart is empty.</div>
    
    let total = 0
    let products = cart.map(item => {
      total += store[item.productId].price * item.quantity;
      return {...store[item.productId], quantity: item.quantity}}
    );
    console.log(promotion);

    return <div>
      <ProductsList products={products} inCart={true} addCartProduct={this.addCartProduct} removeCartProduct={this.removeCartProduct} deleteCartProduct={this.deleteCartProduct} />
      {promotion > 0 ? 
        <span>
          <p>Discount code activated</p>
          <p>Total: <s>${total}</s> ${total * (1 - promotion / 100)}</p>
        </span>
      :
        <span>
          <input placeholder="Discount code" value={this.state.promoCode} onChange={(e) => this.promoCodeChanged(e)}></input>
          <p>Total: ${total}</p>
        </span>
      }            
      <button onClick={this.cartPay}>Proceed to payment</button>
      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER}/>
    </div>;
  }
}

Cart.propTypes = {
  store: PropTypes.object,
  cart: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
  promotion: PropTypes.number.isRequired,
  addCartProduct: PropTypes.func.isRequired,
  removeCartProduct: PropTypes.func.isRequired,
  deleteCartProduct: PropTypes.func.isRequired,
  addDiscountCode: PropTypes.func.isRequired,
  cartPay: PropTypes.func.isRequired,
};

export default withRouter(props => <Cart {...props}/>);