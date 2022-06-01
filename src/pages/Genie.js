import React from 'react';
import ChampionMom from '../components/genie/ChampionMom';
import GenieFromTo from '../components/genie/GenieFromTo';
import GenieHero from '../components/genie/GenieHero';
import GenieRocket from '../components/genie/GenieRocket';
import TrackOrders from '../components/genie/TrackOrders';
// import Navbar from '../components/ui/Navbar';

const Genie = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <GenieHero />
      <GenieFromTo />
      <GenieRocket />
      <ChampionMom />
      <TrackOrders />
    </div>
  );
};

export default Genie;
