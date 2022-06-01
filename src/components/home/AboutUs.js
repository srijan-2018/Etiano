import React from 'react';
import { NavLink } from 'react-router-dom';
import profileSmall from '../../assests/profileSmall.png';
import popcorn from '../../assests/popcorn.png';
import legPiece from '../../assests/legPiece.png';

const AboutUs = () => {
  return (
    <div className='relative font-rubik'>
      <div className='hidden xl:block max-w-max'>
        <img src={popcorn} alt='' className='absolute xl:-top-56' />
      </div>

      <div className='container md:max-w-5xl mx-auto grid md:grid-cols-2 gap-12 place-content-center items-center my-28 lg:my-32'>
        <div>
          <img src={profileSmall} alt='' />
        </div>
        <div>
          <p className='text-lg lg:text-xl text-center md:text-left leading-relaxed lg:leading-relaxed text-gray-200 mb-6 md:mb-9 lg:mb-12'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ab
            quae, quidem totam error blanditiis iste veritatis. Tempora
            dignissimos quas, veritatis, perferendis deleniti impedit id qui
            alias exercitationem dolores debitis magni eligendi, molestias
            necessitatibus sint amet nostrum cupiditate iste delectus.
          </p>

          <NavLink to='/about'>
            <button className='px-6 w-full md:w-auto mb-4 md:mb-0 md:mr-8 py-2 font-semibold md:text-lg rounded-md text-gray-900 bg-cta-dark hover:bg-cta hover:shadow-md hover:-translate-y-2 transition-all duration-200'>
              Explore Our Story
            </button>
          </NavLink>
        </div>
      </div>

      <div className='hidden xl:block max-w-max bg-gray-500'>
        <img src={legPiece} alt='' className='absolute top-10 right-28' />
      </div>
    </div>
  );
};

export default AboutUs;
