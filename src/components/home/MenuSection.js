import React from 'react';
import MenuItems from './menu/MenuItem';
import MenuSectionHeader from './menu/MenuSectionHeader';

const MenuSection = () => {
  return (
    <div className='container mx-auto mt-20 max-w-7xl md:mt-28 lg:mt-40 font-rubik'>
      <MenuSectionHeader />
      <MenuItems />
      <div className='max-w-xs mx-auto md:mt-12 lg:mt-16'>
        <button className='w-full px-6 py-2 font-semibold text-gray-900 transition-all duration-200 rounded-md md:text-lg bg-cta-dark hover:bg-cta hover:shadow-md hover:-translate-y-2'>
          View All
        </button>
      </div>
    </div>
  );
};

export default MenuSection;
