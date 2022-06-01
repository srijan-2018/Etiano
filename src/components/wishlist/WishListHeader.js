import React from 'react';
import popcorn from '../../assests/popcorn.png';
import legPiece from '../../assests/legPiece.png';

const WishListHeader = () => {
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
        My Wishlist
      </h1>
    </div>
  );
};

export default WishListHeader;
