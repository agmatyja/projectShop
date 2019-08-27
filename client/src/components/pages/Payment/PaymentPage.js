import React from 'react';
import "./PaymentPage.scss";
import PaymentSummary from "../../features/PaymentSummary/PaymentSummaryContainer";

const PaymentPage = () => (
  <div className="payment-page">
    <h1 className="center">Thank you for your payment!</h1>
    <PaymentSummary />
  </div>
);

export default PaymentPage;