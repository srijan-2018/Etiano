import React from 'react';
import kolkata from '../../assests/kolkata.png';
import mumbai from '../../assests/mumbai.png';
import delhi from '../../assests/delhi.png';
import bangalore from '../../assests/bangalore.png';

const Locations = () => {
  return (
    <div className='container mt-24 font-rubik md:mt-32 lg:mt-48'>
      <h4 className='mb-8 text-center text-gray-100 text- lg:text-left md:text-2xl lg:text-3xl md:mb-10'>
        Food From All Zones
      </h4>
      <div className='grid grid-cols-2 gap-8 md:grid-cols-4 place-content-center place-items-center'>
        <div>
          <img src={kolkata} alt='' />
          <h6 className='mt-4 text-2xl font-medium text-center text-gray-200 md:mt-6 md:text-3xl lg:text-4xl'>
            Kolkata
          </h6>
        </div>
        <div>
          <img src={mumbai} alt='' />
          <h6 className='mt-4 text-2xl font-medium text-center text-gray-200 md:mt-6 md:text-3xl lg:text-4xl'>
            Mumbai
          </h6>
        </div>
        <div>
          <img src={delhi} alt='' />
          <h6 className='mt-4 text-2xl font-medium text-center text-gray-200 md:mt-6 md:text-3xl lg:text-4xl'>
            Delhi
          </h6>
        </div>
        <div>
          <img src={bangalore} alt='' />
          <h6 className='mt-4 text-2xl font-medium text-center text-gray-200 md:mt-6 md:text-3xl lg:text-4xl'>
            Bangalore
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Locations;
