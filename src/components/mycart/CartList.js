import React from 'react';
import CartItem from './CartItem';

const CartList = ({ cartItems }) => {
  const cartItem = cartItems.map((item) => {
    return <CartItem key={item.cart_id} item={item} />;
  });
  return <div>{cartItem}</div>;
};

export default CartList;
