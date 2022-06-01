import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Wishlist = createContext({
  wishlist: [],
  wishlistLength: 0,
  addToWishlist: (product_id, restaurant_id) => {},
  deleteFromWishlist: (product_id) => {},
  moveToCart: (product_id) => {},
});

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const addToWishlist = async (product_id, restaurant_id) => {
    var data = JSON.stringify({
      product_id: product_id,
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
      'https://achievexsolutions.in/current_work/eatiano/api/auth/wishlist',
      data,
      config
    );
    console.log(res);
  };

  useEffect(() => {
    const getWishlist = async () => {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/auth/wishlist',
        config
      );

      const resData = res.data.data;

      console.log(resData);
      setWishlist(resData);
    };

    getWishlist();
  }, [token]);

  const deleteFromWishlist = async (product_id) => {
    let config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.delete(
      `https://achievexsolutions.in/current_work/eatiano/api/auth/wishlist/${product_id}`,
      config
    );

    const filteredWishlist = wishlist.filter(
      (item) => item.product_id !== product_id
    );
    setWishlist(filteredWishlist);
    console.log(res);
  };

  const wishlistValue = {
    wishlist: wishlist,
    wishlistLength: wishlist.length,
    addToWishlist: addToWishlist,
    deleteFromWishlist: deleteFromWishlist,
  };

  console.log(wishlist);

  return (
    <Wishlist.Provider value={wishlistValue}>{children}</Wishlist.Provider>
  );
};

export default WishlistProvider;
