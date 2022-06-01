import React from 'react';

const Subscription = () => {
  return (
    <div className='font-rubik container my-20 md:my-28 lg:my-40 max-w-4xl'>
      <h6 className='text-brand-text mb-8 md:mb-12 text-xl md:text-3xl text-center font-medium'>
        Subscription
      </h6>
      <h4 className='text-gray-100 font-semibold text-2xl md:text-4xl mb-8 md:mb-12 text-center'>
        Want to get updates ?
      </h4>

      <div className='bg-gray-200 mx-auto px-3 py-2 max-w-2xl rounded-full flex gap-12 justify-between'>
        <div>
          <input
            type='text'
            className='bg-transparent font-medium outline-none px-4 py-2 md:text-lg text-gray-600 rounded-full'
            placeholder='Enter Your Email Address'
          />
        </div>
        <div className=''>
          <button className='px-4 py-2 font-medium md:text-lg rounded-full text-gray-900 bg-cta-dark hover:bg-cta hover:shadow-md transition-all duration-200'>
            <i className='fa fa-arrow-right'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
