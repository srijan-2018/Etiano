import React from 'react';
import genieRocket from '../../assests/genieRocket.png';

const GenieRocket = () => {
  return (
    <div className='container grid gap-8 mt-20 font-rubik md:mt-28 lg:mt-40 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
      <div className='px-4 py-2 rounded-lg shadow-lg bg-secondary'>
        <img src={genieRocket} alt='' />
      </div>

      <div className='lg:col-span-2'>
        <h5 className='mb-8 text-2xl font-medium leading-relaxed text-center text-gray-200 md:leading-relaxed md:text-3xl lg:text-4xl md:mb-10 lg:mb-12'>
          Get Your Favorite Food Throughout The World
        </h5>
        <ul className='list-none'>
          <li className='mb-4 text-gray-400 md:text-xl lg:text-3xl md:mb-6'>
            <span>
              <i className='fa fa-chevron-right text-brand-text'></i>
            </span>{' '}
            Safety
          </li>
          <li className='mb-4 text-gray-400 md:text-xl lg:text-3xl md:mb-6'>
            <span>
              <i className='fa fa-chevron-right text-brand-text'></i>
            </span>{' '}
            Best Quality
          </li>
          <li className='mb-4 text-gray-400 md:text-xl lg:text-3xl md:mb-6'>
            <span>
              <i className='fa fa-chevron-right text-brand-text'></i>
            </span>{' '}
            Hygiene
          </li>
          <li className='mb-4 text-gray-400 md:text-xl lg:text-3xl md:mb-6'>
            <span>
              <i className='fa fa-chevron-right text-brand-text'></i>
            </span>{' '}
            Delivery in 2 days
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GenieRocket;
