import React from 'react';
import { Link } from 'react-router-dom';
import genie from '../../assests/genie.png';

const GenieFromTo = () => {
  return (
    <div>
      <div className='container mt-20 font-rubik lg:hidden'>
        <div className='mb-8'>
          <img src={genie} alt='' />
        </div>

        <div>
          <h4 className='mb-10 text-3xl font-medium text-center text-gray-200 md:text-3xl'>
            From The World
          </h4>

          <p className='leading-relaxed text-center text-brand-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            non. Harum quidem magni delectus. Veritatis non iste quas harum
            porro!
          </p>
        </div>
      </div>

      <div className='hidden bg-center bg-no-repeat lg:block lg:mt-20 font-rubik bg-secondary bg-genieFromTo'>
        <div className='container grid lg:grid-cols-3 place-content-center place-items-center'>
          <div className='lg:col-span-2'>
            <img src={genie} alt='' />
          </div>

          <div className='bg-center bg-no-repeat'>
            <h4 className='mb-6 text-2xl font-medium text-center text-gray-200 lg:text-4xl lg:mb-14'>
              From The World
            </h4>

            <p className='mb-10 text-xl leading-relaxed text-center text-brand-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel
              esse dignissimos suscipit voluptate est corporis officiis magni
              eum harum.
            </p>

            <Link to='/genieAddress'>
              <button className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
                Send Fooood
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenieFromTo;
