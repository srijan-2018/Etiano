import React from 'react';
import CheckoutBody from '../components/checkout/CheckoutBody';
import CheckoutHeader from '../components/checkout/CheckoutHeader';

const Checkout = () => {
  return (
    <div className='font-rubik'>
      <CheckoutHeader />
      <CheckoutBody />
    </div>
  );
};

export default Checkout;
