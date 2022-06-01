import React from 'react';
import cartEmpty from '../../assests/cartEmpty.png';
import sandwich from '../../assests/sandwich.png';
import pie from '../../assests/pie.png';

const EmptyCart = () => {
  return (
    <>
      <div className='container flex items-center justify-center'>
        <img src={cartEmpty} alt='' />
      </div>

      <div className='container relative'>
        <img
          src={sandwich}
          alt='sandwich'
          className='absolute right-0 hidden top-40 lg:block'
        />
        <img src={pie} alt='pie' className='absolute hidden lg:block' />
      </div>
    </>
  );
};

export default EmptyCart;
