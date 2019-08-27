import React from 'react';
import { PropTypes } from 'prop-types/prop-types';
import { withRouter } from 'react-router-dom';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

import ProductsList from '../ProductsList/ProductsList';
import "./Cart.scss";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: ''
    };
  }

  cartPay = () => {
    const { history } = this.props;
    history.push('/payment')
  }

  addCartProduct = (id) => {
    const { addCartProduct } = this.props;
    addCartProduct(id);
    ToastsStore.warning('Item added to the cart')    
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
      ToastsStore.warning('Discount code added! Now use have 10% discount!');
    }
  }

  render() {
    const { store, cart, promotion } = this.props;

    if (cart.length === 0) 
      return <h1 className="center">The cart is empty.</h1>
    
    let products = cart.map(item => {
      return {...store[item.productId], quantity: item.quantity}}
    );

    let total = 0
    products.forEach(item => {
      total += item.price * item.quantity;      
    })

    return <div class="cart">
      <ProductsList products={products} inCart={true} addCartProduct={this.addCartProduct} removeCartProduct={this.removeCartProduct} deleteCartProduct={this.deleteCartProduct} />
      <div class="buy">
        {promotion > 0 ? 
          <>
            <p className="promotion-info">10% discount code activated</p>
            <p className="total">Total: <s>${total}</s> ${total * (1 - promotion / 100)}</p>
          </>  
        :
          <>
            <input className="discount-code" placeholder="Discount code" value={this.state.promoCode} onChange={(e) => this.promoCodeChanged(e)}></input>
            <p className="total">Total: ${total}</p>
          </>  
        }            
        <button class="pay" onClick={this.cartPay}>Proceed to payment</button>
      </div>
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
  addDiscountCode: PropTypes.func.isRequired
};

export default withRouter(props => <Cart {...props}/>);