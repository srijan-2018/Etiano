import React, { useContext } from 'react';
import { Wishlist } from '../../context/wishlistContext';
import { Cart } from '../../context/cartContext';

const WishlistItem = ({ item }) => {
  const productImageSrc = `https://achievexsolutions.in/current_work/eatiano${item.product_image}`;
  const wishListCtx = useContext(Wishlist);
  const cartCtx = useContext(Cart);

  const deleteHandler = () => {
    wishListCtx.deleteFromWishlist(item.product_id);
  };

  const addToCart = () => {
    cartCtx.addToCart(item.product_id, 1);
    wishListCtx.deleteFromWishlist(item.product_id);
  };

  return (
    <section>
      <div className='flex justify-between gap-8 mb-6 mt-14 md:mb-10 lg:mb-14'>
        <div className='grid gap-6 sm:flex'>
          <div>
            <img
              src={productImageSrc}
              alt=''
              className='object-cover w-32 h-32 mb-4'
            />
            <h6 className='mb-3 text-xl font-medium text-gray-100 md:text-2xl lg:text-3xl '>
              {item.product_name}
            </h6>
            <button
              className='font-normal text-brand-text lg:text-lg'
              onClick={addToCart}
            >
              Add To Cart
            </button>
          </div>
          {/* <div className='flex flex-col justify-between'>
            
          </div> */}
        </div>

        <div className='flex flex-col justify-between'>
          <h6 className='text-lg font-medium text-gray-100 lg:text-2xl'>
            Rs{' '}
            <span className='text-brand-text'>
              {item.product_selling_price}
            </span>
          </h6>
          <button
            className='text-gray-100 transition-all duration-150 lg:text-lg hover:text-brand-text'
            onClick={deleteHandler}
          >
            Remove Item
          </button>
        </div>
      </div>
      <hr className='border-0.2 border-cta opacity-10' />
    </section>
  );
};

export default WishlistItem;
