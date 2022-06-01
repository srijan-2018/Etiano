/*
1. Add functionality to track order
2. Make the orderItem component
3. Convert the icons from png to svg
4. Abstract order status complete and pending styles to new class names
*/

import React from 'react';
import track1 from '../assests/track1.png';
import track2 from '../assests/track2.png';
import track3 from '../assests/track3.png';
import track4 from '../assests/track4.png';
import track5 from '../assests/track5.png';
import track6 from '../assests/track6.png';
import Navbar from '../components/ui/Navbar';

const TrackOrder = () => {
  return (
    <div className='font-rubik'>
      <Navbar />
      <div className='container max-w-4xl mx-auto my-16 sm:my-20 md:my-28 lg:my-40'>
        <div className='flex items-center justify-between mb-16 sm:mb-20 md:mb-24 lg:mb-32'>
          <h2 className='text-2xl font-semibold text-gray-100 sm:text-3xl md:text-4xl lg:text-5xl'>
            Track Order
          </h2>
          <div>
            <button className='px-6 py-2 font-medium text-gray-200 transition-all duration-300 border rounded-lg md:px-10 p md:py-3 md:text-xl border-brand-text hover:-translate-y-2'>
              Cancel Order
            </button>
          </div>
        </div>

        <div>
          <div className='flex flex-wrap items-center gap-4 mb-10 sm:mb-14 md:mb-20 lg:mb-28 md:justify-center'>
            <div className='flex items-center justify-center p-4 rounded-full bg-cta'>
              <img src={track1} alt='' className='w-10 h-10 sm:w-12 sm:h-12' />
            </div>
            <div>
              <h6 className='mb-3 text-lg font-medium text-gray-200 md:text-xl lg:text-2xl'>
                Order Placed
              </h6>
              <p className='text-gray-400 lg:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat?
              </p>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-4 mb-10 sm:mb-14 md:mb-20 lg:mb-28 md:justify-center'>
            <div className='flex items-center justify-center p-4 rounded-full bg-cta'>
              <img src={track2} alt='' className='w-10 h-10 sm:w-12 sm:h-12' />
            </div>
            <div>
              <h6 className='mb-3 text-lg font-medium text-gray-200 md:text-xl lg:text-2xl'>
                Order Confirmed
              </h6>
              <p className='text-gray-400 lg:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat?
              </p>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-4 mb-10 sm:mb-14 md:mb-20 lg:mb-28 md:justify-center'>
            <div className='flex items-center justify-center p-4 rounded-full bg-cta'>
              <img src={track3} alt='' className='w-10 h-10 sm:w-12 sm:h-12' />
            </div>
            <div>
              <h6 className='mb-3 text-lg font-medium text-gray-200 md:text-xl lg:text-2xl'>
                Order Processed
              </h6>
              <p className='text-gray-400 lg:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat?
              </p>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-4 mb-10 sm:mb-14 md:mb-20 lg:mb-28 md:justify-center'>
            <div className='flex items-center justify-center p-4 rounded-full bg-secondary'>
              <img src={track4} alt='' className='w-10 h-10 sm:w-12 sm:h-12' />
            </div>
            <div>
              <h6 className='mb-3 text-lg font-medium text-gray-500 md:text-xl lg:text-2xl'>
                Order Received at warehouse
              </h6>
              <p className='text-gray-700 lg:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat?
              </p>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-4 mb-10 sm:mb-14 md:mb-20 lg:mb-28 md:justify-center'>
            <div className='flex items-center justify-center p-4 rounded-full bg-secondary'>
              <img src={track5} alt='' className='w-10 h-10 sm:w-12 sm:h-12' />
            </div>
            <div>
              <h6 className='mb-3 text-lg font-medium text-gray-500 md:text-xl lg:text-2xl'>
                Out For Delivery
              </h6>
              <p className='text-gray-700 lg:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat?
              </p>
            </div>
          </div>

          <div className='flex flex-wrap items-center gap-4 mb-10 sm:mb-14 md:mb-20 lg:mb-28 md:justify-center'>
            <div className='flex items-center justify-center p-4 rounded-full bg-secondary'>
              <img src={track6} alt='' className='w-10 h-10 sm:w-12 sm:h-12' />
            </div>
            <div>
              <h6 className='mb-3 text-lg font-medium text-gray-500 md:text-xl lg:text-2xl'>
                Order Delivered
              </h6>
              <p className='text-gray-700 lg:text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
