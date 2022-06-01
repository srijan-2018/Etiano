import React from 'react';
// import Navbar from '../components/ui/Navbar';
import MyWishlist from '../components/wishlist/MyWishlist';
import WishListHeader from '../components/wishlist/WishListHeader';

const Wishlist = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <WishListHeader />
      <MyWishlist />
    </div>
  );
};

export default Wishlist;
