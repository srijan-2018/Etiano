import React from 'react';
import RestaurantItem from './RestaurantItem';

const RestaurantList = ({ allRestaurants }) => {
  const restaurantsList = allRestaurants.map((restaurant) => {
    return (
      <RestaurantItem
        key={restaurant.restaurant_id}
        restaurantData={restaurant}
      />
    );
  });

  return (
    <div className='grid gap-20 mb-16 md:mb-28 lg:mb-40 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center'>
      {restaurantsList}
    </div>
  );
};

export default RestaurantList;
