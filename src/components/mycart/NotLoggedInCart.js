import React from 'react';
import { Link } from 'react-router-dom';
import cartEmpty from '../../assests/cartEmpty.png';

const NotLoggedInCart = () => {
  return (
    <div className='container flex items-center justify-between font-rubik'>
      <div className='grid max-w-3xl gap-6 p-6 mx-auto mb-24 shadow-lg lg:mb-32 rounded-xl lg:grid-cols-3 place-content-center place-items-center bg-secondary'>
        <div className='col-span-1'>
          <img src={cartEmpty} alt='' />
        </div>

        <div className='col-span-2'>
          <h1 className='mb-4 text-2xl font-medium leading-relaxed text-gray-100 lg:leading-relaxed lg:text-3xl lg:mb-6'>
            Oops! Looks Like You've Not Signed In
          </h1>
          <p className='mb-6 leading-relaxed text-gray-300 lg:leading-relaxed lg:text-lg lg:mb-8'>
            Signin to start adding items to Cart.
          </p>

          <Link
            to='/signin'
            className='text-lg transition-all duration-200 text-brand-text hover:text-border hover:underline'
          >
            Signin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotLoggedInCart;
