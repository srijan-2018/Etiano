// TODOS:
// 1. Add functionality to remove item

import React, { useContext } from 'react';
import { Cart } from '../../context/cartContext';

const CartItem = ({ item }) => {
  const productImageSrc = `https://achievexsolutions.in/current_work/eatiano${item.product_image}`;
  const cartCtx = useContext(Cart);
  // const quantity = item.quantity.replace(/"/g, "'").replace(/'/g, '');
  const deleteProduct = () => {
    cartCtx.deleteProduct(item.cart_id);
  };

  console.log(item.product_id);

  return (
    <section>
      <div className='flex justify-between gap-8 mb-6 mt-14 md:mb-10 lg:mb-14'>
        <div className='grid gap-6 sm:flex'>
          <div>
            <img
              src={productImageSrc}
              alt=''
              className='object-cover w-40 h-40'
            />
          </div>
          <div className='flex flex-col justify-between'>
            <h6 className='mb-3 text-xl font-medium text-gray-100 md:text-2xl lg:text-3xl '>
              {item.product_name}
            </h6>
            <div className='flex flex-wrap items-center gap-4 mb-3'>
              <p className='text-brand-text lg:text-lg'>Price:</p>
              <span className='font-normal text-gray-100 lg:text-lg'>
                Rs. {item.product_selling_price}{' '}
              </span>
              <p className='text-brand-text lg:text-lg'>Quantity:</p>
              <span className='text-gray-300'>{item.quantity}</span>
            </div>
            {/* <div className='flex justify-between font-normal text-gray-400 lg:text-lg'>
              <p>{item.dishType}</p>
              <p>{item.cuisine}</p>
            </div> */}
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <h6 className='text-lg font-medium text-gray-100'>
            Cart Price:
            <span className='text-brand-text'>
              {' '}
              Rs {item.product_selling_price * item.quantity}
            </span>
          </h6>
          {/* {numItems} <button>+</button> */}
          <button
            className='text-gray-100 transition-all duration-150 lg:text-lg hover:text-brand-text'
            onClick={deleteProduct}
          >
            Remove Item
          </button>
        </div>
      </div>
      <hr className='border-0.2 border-cta opacity-10' />
    </section>
  );
};

export default CartItem;
