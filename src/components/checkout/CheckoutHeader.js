import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutHeader = () => {
  return (
    <div className='container mt-32 lg:mt-40'>
      <h1 className='mb-3 text-4xl font-semibold text-gray-100 lg:text-5xl'>
        Checkout
      </h1>
      <Link
        to='/cart'
        className='text-base text-gray-400 transition-all duration-200 lg:text-lg hover:text-brand-text hover:underline'
      >
        Back To Cart
      </Link>
    </div>
  );
};

export default CheckoutHeader;
