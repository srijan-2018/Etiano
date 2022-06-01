import React from 'react';

const AboutHero = () => {
  return (
    <div className='bg-center bg-no-repeat font-rubik bg-aboutHero'>
      <div className='container py-32 md:py-48 lg:py-72'>
        <h1 className='text-4xl font-semibold text-center text-gray-100 md:text-left md:text-5xl lg:text-6xl'>
          About Us
        </h1>
        <p className='mt-6 text-xl italic text-center text-gray-300 md:text-left md:text-2xl md:mt-10'>
          "Creating Magic With Food!"
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
