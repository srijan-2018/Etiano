import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import hero from '../../assests/hero.png';
import { Auth } from '../../context/authContext';

const Hero = () => {
  const authCtx = useContext(Auth);

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <div className='container mt-20 md:mt-28'>
      <div className='grid gap-8 md:grid-cols-2 place-content-center place-items-center'>
        <div className='order-2 md:order-1 md:container'>
          <h1 className='mb-6 text-4xl font-semibold leading-relaxed text-center text-gray-100 md:text-left lg:text-5xl md:leading-relaxed lg:leading-relaxed md:mb-9 lg:mb-12'>
            Lorem ipsum dolor <span className='text-brand-text'>sit amet.</span>
          </h1>

          <p className='mb-8 font-light leading-relaxed text-center text-gray-300 md:text-lg md:text-left md:leading-relaxed md:mb-12 lg:mb-26'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
            asperiores natus dicta at libero.
          </p>

          <div className='z-50'>
            {!isLoggedIn && (
              <NavLink to='/signin'>
                <button className='w-full px-6 py-2 mb-4 font-medium text-gray-900 transition-all duration-200 rounded-md md:w-auto md:mb-0 md:mr-8 md:text-lg bg-cta-dark hover:bg-cta hover:shadow-md hover:-translate-y-2'>
                  Get Started
                </button>
              </NavLink>
            )}

            <NavLink to='/menu'>
              <button className='w-full px-6 py-2 font-medium text-gray-100 transition-all duration-200 border-2 rounded-md md:w-auto md:text-lg border-brand-text hover:bg-brand-text'>
                Explore Our Menu
              </button>
            </NavLink>
          </div>
        </div>

        <div className='order-1 md:order-2'>
          <img src={hero} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
