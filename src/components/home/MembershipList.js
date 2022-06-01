import React from 'react';
import Member from './Member';

const MembershipList = ({ memberships }) => {
  const membershipList = memberships.map((member) => {
    return <Member key={member.membership_type_id} member={member} />;
  });

  return (
    <div className='grid max-w-4xl gap-8 mx-auto mt-10 mb-24 md:mb-40 lg:mb-60 md:mt-16 lg:mt-28 lg:grid-cols-3 md:grid-cols-2 '>
      {membershipList}
    </div>
  );
};

export default MembershipList;
