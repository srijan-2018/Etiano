import React from 'react';
import track1 from '../assests/track1.png';
import track2 from '../assests/track2.png';
import Navbar from '../components/ui/Navbar';

const OrderList = () => {
  return (
    <div className='font-rubik'>
      <Navbar />
      <div className='container max-w-4xl mx-auto my-16 sm:my-20 md:my-28 lg:my-40'>
        <div className='flex items-center justify-between mb-16 sm:mb-20 md:mb-24 lg:mb-32'>
          <h2 className='text-2xl font-semibold text-gray-100 sm:text-3xl md:text-4xl lg:text-5xl'>
            Order List
          </h2>
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

        </div>
      </div>
    </div>
  )
}

export default OrderList