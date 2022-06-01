import React from 'react';
import applinks from '../../assests/applinks.png';
import googlePlay from '../../assests/googlePlay.png';
import appStore from '../../assests/appStore.png';
// import sandwich from '../../assests/sandwich.png';

const AppLinks = () => {
  return (
    <div className='font-rubik bg-secondary'>
      {/* <div className='h-96 w-96 hidden xl:block'>
        <img
          src={sandwich}
          alt=''
          className='w-96 h-96 absolute -top-12 right-2'
        />
      </div> */}
      <div className='grid md:grid-cols-3 container gap-8 md:place-content-center md:place-items-center py-6 md:py-12'>
        <div className='md:col-span-2 md:-mt-48'>
          <img src={applinks} alt='' />
        </div>

        <div className='md:col-span-1'>
          <h4 className='font-medium text-3xl md:text-4xl text-center text-gray-100 mb-6 md:mb-10'>
            Find Us On
          </h4>

          <div className='max-w-max mx-auto mb-3 md:mb-6'>
            <a href='#'>
              <img src={googlePlay} alt='' />
            </a>
          </div>

          <div className='max-w-max mx-auto'>
            <a href='#'>
              <img src={appStore} alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLinks;
