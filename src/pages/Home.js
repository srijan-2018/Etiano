import React from 'react';
import AboutUs from '../components/home/AboutUs';
import AppLinks from '../components/home/AppLinks';
import Hero from '../components/home/Hero';
import Membership from '../components/home/Membership';
import MenuSection from '../components/home/MenuSection';
import News from '../components/home/News';
import Reason from '../components/home/Reason';
import Subscription from '../components/home/Subscription';
import Tradition from '../components/home/Tradition';
// import Navbar from '../components/ui/Navbar';

const Home = () => {
  return (
    <div className='font-rubik'>
      {/* <Navbar /> */}
      <Hero />
      <AboutUs />
      <Reason />
      {/* <MenuSection /> */}
      <Tradition />
      <Membership />
      <AppLinks />
      {/* <News /> */}
      <Subscription />
    </div>
  );
};

export default Home;
