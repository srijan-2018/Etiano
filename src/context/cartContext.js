import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';
// import NotLoggedInCart from '../components/mycart/NotLoggedInCart';

export const Cart = createContext({
  cart: [],
  cartLength: 0,
  addToCart: (productId, quantity, restaurant_id, product) => {},
  deleteProduct: (cart_id) => {},
  emptyCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cart, setCartItems] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const deleteProduct = async (id) => {
    let config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.delete(
      `https://achievexsolutions.in/current_work/eatiano/api/auth/cart/${id}`,
      config
    );

    const filteredCart = cart.filter((cartItem) => cartItem.cart_id !== id);
    setCartItems(filteredCart);
    const resData = await res.data.data;
    console.log(resData);
  };

  useEffect(() => {
    const getCartItems = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const res = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/auth/cart',
        config
      );

      const cartData = await res.data;
      // console.log(res.data);

      setCartItems(cartData);
    };

    getCartItems();
  }, [token]);

  const addToCart = async (product_id, quantity, restaurant_id, product) => {
    if (quantity === 0) {
      console.log(quantity);
    } else {
      // setCartItems((prevState) => [...prevState, product]);
      console.log(product);
      var data = JSON.stringify({
        product_id: product_id,
        quantity: quantity,
        restaurant_id: restaurant_id,
      });

      let config = {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      };
      const res = await axios.post(
        'https://achievexsolutions.in/current_work/eatiano/api/auth/cart',
        data,
        config
      );
      const resData = res;

      console.log(resData.data.data);
      // if (resData.status === 200) {
      //   alert('Added to cart successfully');
      //   window.location.reload();
      // } else {
      //   alert('Try Again');
      // }

      setCartItems((prevState) => [...prevState, resData.data.data]);
    }
    // window.location.reload();
  };

  console.log(cart);

  const cartValue = {
    cart: cart,
    cartLength: cart.length,
    addToCart: addToCart,
    deleteProduct: deleteProduct,
  };

  return <Cart.Provider value={cartValue}>{children}</Cart.Provider>;
};

export default CartProvider;
