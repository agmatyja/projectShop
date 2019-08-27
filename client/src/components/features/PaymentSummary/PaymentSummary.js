import React from 'react';
import { PropTypes } from 'prop-types/prop-types';
import { withRouter } from 'react-router-dom';
import './PaymentSummary.scss';
class PaymentSummary extends React.Component {

  render() {
    const { store, cart, promotion } = this.props;

    let products = cart.map(item => {
      return {...store[item.productId], quantity: item.quantity}}
    );

    let total = 0
    products.forEach(item => {
      total += item.price * item.quantity;      
    })

    return <div class="payment-summary">
      <table>
        <tr>
          <th className="wide left">Author</th>
          <th className="wide left">Title</th>
          <th>Quantity</th>
          <th>Price per item</th>
          <th>Price</th>
        </tr>
        {products.map(prod => (
          <tr>
            <td className="wide left">{prod.author}</td>
            <td className="wide left">{prod.title}</td>
            <td className="numbers">{prod.quantity}</td>
            <td className="numbers">${prod.price}</td>
            <td className="numbers">${prod.price * prod.quantity}</td>
          </tr>  
        ))}
        <tr>
          <td className="total left" colspan="4">Total</td>
          <td className="total numbers">${total}</td>
        </tr>  
        {promotion > 0 ? 
          <>
            <tr>
              <td colspan="4" className="left">Discount</td>
              <td className="numbers">-${total * (promotion / 100)}</td>
            </tr>  
            <tr>
              <td colspan="4" className="total left">PAYMENT</td>
              <td className="total numbers">${total * (1 - promotion / 100)}</td>
            </tr>
          </>    
          : null  
        }
      </table>
    </div>;
  }

  componentWillUnmount() {
    this.props.cartPay();    
  }
}

PaymentSummary.propTypes = {
  store: PropTypes.object,
  cart: PropTypes.arrayOf(PropTypes.shape({
    productId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  })),
  promotion: PropTypes.number.isRequired
};

export default withRouter(props => <PaymentSummary {...props}/>);