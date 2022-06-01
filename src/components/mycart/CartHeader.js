import React from 'react';
import popcorn from '../../assests/popcorn.png';
import legPiece from '../../assests/legPiece.png';

const CartHeader = () => {
  return (
    <div className='relative my-24 md:my-32 lg:my-40'>
      <img
        src={popcorn}
        alt='popcorn bg-img'
        className='absolute hidden lg:block'
      />
      <img
        src={legPiece}
        alt='legPiece bg-img'
        className='absolute hidden right-20 top-40 lg:block'
      />
      <h1 className='text-3xl font-semibold text-center text-gray-100 font-rubik md:text-5xl lg:text-6xl'>
        My Cart
      </h1>
      {/* <div className='flex justify-between'>
        <div className='bg-white max-w-max'></div>
        <div className='bg-white min'></div>
      </div> */}
    </div>
  );
};

export default CartHeader;
