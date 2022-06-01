import React, { useState, useContext } from 'react';
import { Cart } from '../../../context/cartContext';
import { Wishlist } from '../../../context/wishlistContext';
import ReactTooltip from 'react-tooltip';
import { Auth } from '../../../context/authContext';

const ProductItem = ({ product, restaurant_id }) => {
  const productImageSrc = `https://achievexsolutions.in/current_work/eatiano${product.product_image}`;
  const [quantity, setQuantity] = useState(0);
  const cartCtx = useContext(Cart);
  const authCtx = useContext(Auth);
  const wishListCtx = useContext(Wishlist);

  const token = authCtx.token;

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity <= 0) {
      alert('Item Qunatity Cannot Be Less Than Zero!');
      return;
    }
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const addToCart = () => {
    if (!token) {
      alert('Not Signed In! Please Signin to continue shopping');
      return;
    } else if (quantity === 0) {
      alert('Item Qunatity Cannot Be Zero!');
      return;
    }
    // const stringQuantity = quantity.toString();
    // const jsonQuantity = JSON.stringify(stringQuantity);
    cartCtx.addToCart(product.product_id, quantity, restaurant_id, product);
    console.log(product);
    setQuantity(0);
  };

  const wishlistHandler = () => {
    if (!token) {
      alert('Not Signed In! Please Signin to continue shopping');
      return;
    } else {
      wishListCtx.addToWishlist(product.product_id, restaurant_id);
      console.log(product.product_id);
      alert('Item Added To Wishlist!!');
    }
  };

  return (
    <div className='mb-10 shadow-lg rounded-xl md:mb-4 lg:mb-0 bg-secondary'>
      <div>
        <img src={productImageSrc} alt='' className='w-full mb-2 rounded-xl' />
      </div>

      <div className='p-4 lg:p-6'>
        <h3 className='mb-2 text-lg font-semibold text-center text-gray-100 lg:text-2xl'>
          {product.product_name}
        </h3>
        {/* <p className='mb-4 text-sm font-light text-center text-gray-300 lg:text-base'>
          {product.product_description}
        </p> */}

        <p className='mb-2 text-xs italic font-light opacity-80 text-border'>
          {product.product_status === 'active' ? '' : 'OUT OF STOCK'}
        </p>

        <div className='flex items-center justify-between mb-3'>
          <p className='text-cta-dark'>{product.category_name[0]}</p>
          <p className='text-cta-dark'>{product.category_name[1]}</p>
        </div>

        <div className='flex items-center justify-between'>
          <p className='font-medium lg:text-lg text-cta'>
            ₹ {product.product_selling_price}
          </p>
          <p>
            <i className='fa fa-star text-brand-text'></i>{' '}
            {product.product_rating}
          </p>
        </div>

        <div className='flex flex-wrap items-center gap-4 mt-3'>
          <h6 className='text-gray-200'>Set Items Quantity: </h6>
          <div className='rounded-lg bg-primary'>
            <button
              onClick={decrementQuantity}
              className='px-2 py-1 text-lg font-medium text-brand-text'
            >
              -
            </button>
            <span className='text-lg font-medium text-center text-gray-200'>
              {quantity}
            </span>
            <button
              onClick={incrementQuantity}
              className='px-2 py-1 text-lg font-medium text-brand-text'
            >
              +
            </button>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-between'>
          <div>
            <button
              data-for='tooltip-bg'
              data-tip='Add To Cart'
              className='mt-8 text-brand-text'
              onClick={addToCart}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='h-8 w-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </button>
            <ReactTooltip id='tooltip-bg' type='info' />
          </div>

          <div>
            <button
              data-for='tooltip-bg-wishlist'
              data-tip='Add To Wishlist'
              className='mt-8 text-brand-text'
              onClick={wishlistHandler}
            >
              <i className='fa fa-heart'></i>
            </button>
            <ReactTooltip id='tooltip-bg-wishlist' type='info' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
