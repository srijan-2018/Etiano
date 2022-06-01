import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Location } from './locationContext';

export const Restaurants = createContext({
  allRestaurants: [],
});

const RestaurantsProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const locationCtx = useContext(Location);

  const lat = locationCtx.lat;
  const lng = locationCtx.long;

  console.log(lat);

  useEffect(() => {
    const getAllRestaurants = async () => {
      const res = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/all_restaurant',
        {
          params: { lat: lat, lng: lng },
        }
      );

      const resData = res.data.data;
      setRestaurants(resData);
    };

    getAllRestaurants();
  }, []);

  const restaurantCtx = {
    allRestaurants: restaurants,
  };

  return (
    <Restaurants.Provider value={restaurantCtx}>
      {children}
    </Restaurants.Provider>
  );
};

export default RestaurantsProvider;
