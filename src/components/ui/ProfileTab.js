import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileTab = ({ tab }) => {
  const tabName = tab.split(' ').join('');
  return (
    <div className='mb-6'>
      <NavLink to={`/profile/${tabName.trim().toLowerCase()}`}>
        <div className='bg-secondary w-full md:w-auto text-gray-300 hover:text-brand-text transition-all duration-200 rounded-md px-4 py-2'>
          <h6 className='md:text-lg'>{tab}</h6>
        </div>
      </NavLink>
    </div>
  );
};

export default ProfileTab;
