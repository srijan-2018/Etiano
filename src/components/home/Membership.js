import React, { useContext } from 'react';
import { Memberships } from '../../context/membershipContext';
import MembershipList from './MembershipList';

const Membership = () => {
  const membershipCtx = useContext(Memberships);
  const memberships = membershipCtx.memberships;

  return (
    <div className='container relative mt-20 font-rubik md:mt-28 lg:mt-40'>
      <h6 className='mb-8 text-2xl font-medium text-center text-brand-text md:mb-12 md:text-3xl'>
        Bank For Your Bucks
      </h6>

      <h4 className='mb-8 text-3xl font-medium text-center text-gray-200 md:mb-12 md:text-4xl'>
        Introducing Premium Memberships
      </h4>

      <MembershipList memberships={memberships} />
    </div>
  );
};

export default Membership;
