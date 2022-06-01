import React from 'react';
import Card from '../ui/Card';
import taco from '../../assests/taco.png';
import bestOffers from '../../assests/bestOffers.png';
import pocket from '../../assests/pocket.png';
import variousMenus from '../../assests/variousMenus.png';

const Reason = () => {
  return (
    <div className='container relative font-rubik'>
      <div className='hidden xl:block max-w-max'>
        <img src={taco} alt='' className='absolute -top-60' />
      </div>
      <h4 className='mb-6 text-xl font-medium text-center md:text-2xl md:mb-10 text-brand-text'>
        Reason
      </h4>
      <h2 className='mb-8 text-3xl font-semibold text-center text-gray-100 md:text-4xl md:mb-12'>
        Why Choose Us
      </h2>

      <div className='grid gap-8 mx-auto md:max-w-5xl md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center'>
        <Card
          icon={variousMenus}
          title='Various Menus'
          body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita fugiat illum magni maiores necessitatibus? Impedit.'
        />

        <Card
          icon={pocket}
          title='Pocket Friendly Delivery'
          body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita fugiat illum magni maiores necessitatibus? Impedit.'
        />

        <Card
          icon={bestOffers}
          title='Best Offers'
          body='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita fugiat illum magni maiores necessitatibus? Impedit.'
        />
      </div>
    </div>
  );
};

export default Reason;
