// import axios from 'axios';
import React, { useContext, useState, useRef } from 'react';
import { Restaurants } from '../../context/restaurantsContext';
import RestaurantList from './allRestaurants.js/RestaurantList';

const RestaurantsMenu = () => {
  const [isSorted, setIsSorted] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const restaurants = useContext(Restaurants);
  const allRestaurants = restaurants.allRestaurants;

  const searchRef = useRef();

  console.log(allRestaurants);

  allRestaurants.map((restaurant) => console.log(restaurant.restaurant_rating));

  const sortRestaurants = () => {
    setIsSorted(true);
  };

  const sortedRestaurants = allRestaurants.sort((a, b) => {
    if (isSorted) {
      return b.restaurant_rating - a.restaurant_rating;
    } else {
      return allRestaurants;
    }
  });

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== '') {
      const filteredRestaurants = sortedRestaurants.filter((restaurant) => {
        return Object.values(restaurant)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredRestaurants);
    } else {
      setSearchResults(sortedRestaurants);
    }
  };

  const searchFormHandler = (e) => {
    e.preventDefault();
    setSearchTerm('');
  };

  return (
    <div className='container mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <div className='flex flex-wrap items-center justify-center gap-6 mb-12 lg:justify-between md:mb-16'>
        <h2 className='text-center text-gray-100 lg:text-left md:text-2xl lg:text-3xl'>
          Restaurants Near You
        </h2>

        <div className='flex flex-wrap items-center justify-center gap-4 lg:justify-between'>
          <form onSubmit={searchFormHandler}>
            <input
              type='text'
              placeholder='Search Restaurants...'
              className='w-full px-4 py-2 text-gray-200 border-2 rounded-md border-secondary lg:text-lg bg-primary focus:ring-2 ring-offset-2 ring-offset-secondary'
              ref={searchRef}
              onChange={searchHandler}
              value={searchTerm}
            />
          </form>

          <button
            className='px-4 py-2 text-gray-200 transition-all duration-200 border-2 rounded-md cursor-pointer bg-primary lg:text-lg border-secondary'
            onClick={sortRestaurants}
          >
            <span className='text-xl text-brand-text'>Sort </span>: Highest To
            Lowest (Rating)
          </button>
        </div>
      </div>

      <RestaurantList
        allRestaurants={
          searchTerm.length < 1 ? sortedRestaurants : searchResults
        }
      />
    </div>
  );
};

export default RestaurantsMenu;
