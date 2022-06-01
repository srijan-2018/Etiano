import React from 'react';
import { Link } from 'react-router-dom';

const TrackOrders = () => {
  return (
    <div className='container my-20 md:my-28 lg:my-40 font-rubik'>
      <Link to='/profile/orders'>
        <div className='max-w-lg py-6 mx-auto transition-all duration-200 rounded-lg shadow-lg lg:py-10 bg-secondary hover:bg-gray-800'>
          <h4 className='text-3xl text-center text-gray-200 md:text-4xl text-medium lg:text-5xl'>
            View All Orders
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default TrackOrders;
