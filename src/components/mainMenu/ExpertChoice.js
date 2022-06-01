import React from 'react';
import Favs from '../ui/Favs';
import kira from '../../assests/kira.png';
import kevin from '../../assests/kevin.png';
import jessica from '../../assests/mom1.png';
import Kim from '../../assests/mom2.png';

const ExpertChoice = () => {
  return (
    <div className='mt-24 md:mt-32 lg:mt-48 font-rubik'>
      <div className='container'>
        <h4 className='mb-8 text-center text-gray-100 lg:text-left md:text-2xl lg:text-3xl md:mb-10'>
          Expert Choice
        </h4>
      </div>
      <div className='shadow-lg py-14 bg-secondary md:py-16'>
        <div className='container grid grid-cols-2 gap-8 md:grid-cols-4 place-items-center'>
          <div>
            <Favs
              category='Choice Of Restaurant'
              name='Kira'
              img={kira}
              restaurantName='Momcambo'
            />
          </div>
          <div>
            <Favs
              category='Choice Of Restaurant'
              name='kevin'
              img={kevin}
              restaurantName='Salt House'
            />
          </div>
          <div>
            <Favs
              category='Choice Of Restaurant'
              name='Jessica'
              img={jessica}
              restaurantName='BBQ'
            />
          </div>
          <div>
            <Favs
              category='Choice Of Restaurant'
              name='Kim'
              img={Kim}
              restaurantName='Peter Cat'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertChoice;
