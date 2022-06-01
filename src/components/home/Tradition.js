import React from 'react';
import { Link } from 'react-router-dom';
import tradition from '../../assests/tradition.png';

const Tradition = () => {
  return (
    <div className='container relative grid gap-8 my-20 font-rubik md:grid-cols-2 place-content-center place-items-center md:my-28 lg:my-40'>
      <div className='order-2 md:container md:order-1'>
        <h3 className='mb-5 text-2xl font-medium leading-relaxed text-center text-gray-100 md:text-3xl lg:text-4xl lg:text-left md:leading-relaxed lg:leading-relaxed md:mb-7'>
          We Bring Tradition & Family Food To You
        </h3>
        <p className='mb-3 leading-relaxed text-center text-gray-300 lg:text-lg lg:text-left md:mb-5'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit neque
          perferendis accusamus unde tenetur aliquam.
        </p>
        <p className='mb-8 leading-relaxed text-center text-gray-300 lg:text-lg lg:text-left md:mb-12'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>

        <Link to='/about'>
          <button className='w-full px-6 py-2 mb-4 font-medium text-gray-900 transition-all duration-200 rounded-md lg:w-auto md:mb-0 md:mr-8 md:text-lg bg-cta-dark hover:bg-cta hover:shadow-md hover:-translate-y-2'>
            Explore Our Story
          </button>
        </Link>
      </div>

      <div className='order-1 md:order-2'>
        <img src={tradition} alt='' />
      </div>
    </div>
  );
};

export default Tradition;
