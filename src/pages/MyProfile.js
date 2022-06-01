import React from 'react';
import ProfileDetails from '../components/myProfile/ProfileDetails';
import ProfileTabs from '../components/myProfile/ProfileTabs';
// import Navbar from '../components/ui/Navbar';

const MyProfile = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className='container my-20 md:my-28 lg:my-40'>
        <div className='grid items-center gap-12 place-content-between lg:grid-cols-5'>
          <div className='lg:col-span-1'>
            <ProfileTabs />
          </div>
          <div className='lg:col-span-4'>
            <ProfileDetails />
          </div>
        </div>
        {/* <div className=''>
        <ProfileDetails />
      </div> */}
      </div>
    </div>
  );
};

export default MyProfile;
