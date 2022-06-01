import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div className='container font-rubik bg-transparent py-3 md:py-4'>
      <NavLink
        to='/'
        className='font-semibold text-3xl md:text-4xl text-gray-100'
      >
        Logo
      </NavLink>
    </div>
  );
};

export default AuthNav;
