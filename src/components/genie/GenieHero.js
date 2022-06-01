import React from 'react';
import mom from '../../assests/mom.jfif';

const GenieHero = () => {
  return (
    <div className='font-rubik'>
      <div className='container grid gap-8 mt-32 md:mt-40 md:grid-cols-2 place-content-center place-items-center lg:hidden'>
        <div className='order-2 md:order-1'>
          <h1 className='mb-5 text-4xl font-semibold text-center text-gray-100 md:text-5xl md:text-left md:mb-8'>
            Mom's Genie
          </h1>
          <p className='italic text-center text-gray-300 md:text-left md:text-lg'>
            Home Made Food From All Over The World.
          </p>
        </div>

        <div className='order-1 md:order-2'>
          <img src={mom} alt='' className='rounded-md' />
        </div>
      </div>

      <div className='hidden lg:block lg:bg-center lg:bg-no-repeat lg:mt-16 lg:bg-genieHero lg:h-85vh'>
        <div className='container h-full py-28 md:py-40 lg:py-48'>
          <h1 className='font-semibold text-center text-gray-100 lg:text-7xl'>
            Mom's Genie
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GenieHero;
