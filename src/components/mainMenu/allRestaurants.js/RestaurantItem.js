import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantItem = ({ restaurantData }) => {
  const restaurantRating = restaurantData.restaurant_rating / 10;
  const restaurantImageSrc = `https://achievexsolutions.in/current_work/eatiano${restaurantData.restaurant_image}`;
  return (
    <Link to={`/menu/restaurant/${restaurantData.restaurant_id}`}>
      <div>
        <div>
          <img
            src={restaurantImageSrc}
            alt=''
            className='w-full mb-6 rounded-xl md:mb-8'
          />
        </div>
        <h6 className='mb-3 text-xl font-medium text-center text-gray-100 lg:text-2xl'>
          {restaurantData.restaurant_name}
        </h6>
        <p className='mb-4 text-sm font-light text-center text-gray-300 md:mb-5'>
          <i className='fa fa-map-marker'></i>{' '}
          {restaurantData.restaurant_address}
        </p>

        <div className='flex items-center justify-around'>
          <p className='text-gray-300'>
            <i className='fa fa-star text-brand-text'> </i> {restaurantRating}
          </p>
          <Link
            to={`/menu/restaurant/${restaurantData.restaurant_id}`}
            className='text-brand-text hover:text-border'
          >
            View All Items
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantItem;
