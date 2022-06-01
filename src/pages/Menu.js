import React from 'react';
import ExpertChoice from '../components/mainMenu/ExpertChoice';
import Locations from '../components/mainMenu/Locations';
import RestaurantsMenu from '../components/mainMenu/RestaurantsMenu';
// import Navbar from '../components/ui/Navbar';

const Menu = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Locations />
      <RestaurantsMenu />
      <ExpertChoice />
    </div>
  );
};

export default Menu;
