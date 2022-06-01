import React from 'react';
import mom1 from '../../assests/mom1.png';
import mom2 from '../../assests/mom2.png';
import mom3 from '../../assests/mom3.png';

const ChampionMom = () => {
  return (
    <div className='container my-20 font-rubik md:my-28 lg:my-32'>
      <h4 className='text-4xl font-medium text-center text-gray-200 mb-14 lg:text-5xl md:mb-24'>
        Champion Mom's
      </h4>
      <div className='grid grid-cols-2 gap-6 lg:gap-12 lg:grid-cols-3 place-content-center place-items-center'>
        <div>
          <img src={mom1} alt='' className='mb-5 md:mb-8' />
          <h6 className='text-lg font-medium text-center text-gray-200 md:text-2xl'>
            Jenny Smith
          </h6>
        </div>
        <div className='lg:mt-24'>
          <img src={mom2} alt='' className='mb-5 md:mb-8' />
          <h6 className='text-lg font-medium text-center text-gray-200 md:text-2xl'>
            Jenny Smith
          </h6>
        </div>
        <div>
          <img src={mom3} alt='' className='mb-5 md:mb-8' />
          <h6 className='text-lg font-medium text-center text-gray-200 md:text-2xl'>
            Jenny Smith
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ChampionMom;
