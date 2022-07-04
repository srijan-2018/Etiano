import React from 'react';
import ProfileTab from '../ui/ProfileTab';

const ProfileTabs = () => {
  return (
    <div className='font-rubik grid sm:grid-cols-2 lg:grid-cols-1 gap-x-8'>
      <ProfileTab tab='Payment Details' />
      <ProfileTab tab='Orders' />
      <ProfileTab tab='orderlist' />
      <ProfileTab tab='Notifications' />
      <ProfileTab tab='Inbox' />
      <ProfileTab tab='Refer A Friend' />
      <ProfileTab tab='Reviews' />
      <ProfileTab tab='Membership' />
    </div>
  );
};

export default ProfileTabs;
