import React, { useContext } from 'react';
import { Auth } from '../../context/authContext';
import { Wishlist } from '../../context/wishlistContext';
import NotLoggedInWishlist from './NotLoggedInWishlist';
import WishlistItem from './WishlistItem';
import sandwich from '../../assests/sandwich.png';
import pie from '../../assests/pie.png';

const MyWishlist = () => {
  const authCtx = useContext(Auth);
  const wishlistCtx = useContext(Wishlist);
  const wishlistItems = wishlistCtx.wishlist;

  const wishlist = wishlistItems.map((item) => {
    return <WishlistItem key={item.wishlist_id} item={item} />;
  });

  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      {isLoggedIn && (
        <div className='container font-rubik sm:my-16 md:md-24 lg:my-80'>
          <div className='flex items-center justify-between mb-8 md:mb-16 lg:mb-24'>
            <h6 className='text-lg font-medium text-gray-300 md:text-2xl'>
              No of Items:{' '}
              <span className='text-brand-text'>
                {wishlistCtx.wishlistLength}
              </span>
            </h6>
          </div>

          {wishlist}

          <div className='relative'>
            <img
              src={sandwich}
              alt='sandwich'
              className='absolute right-0 z-0 hidden lg:block'
            />
            <img
              src={pie}
              alt='pie'
              className='absolute hidden -top-32 lg:block'
            />
          </div>
        </div>
      )}
      {!isLoggedIn && <NotLoggedInWishlist />}
    </>
  );
};

export default MyWishlist;
