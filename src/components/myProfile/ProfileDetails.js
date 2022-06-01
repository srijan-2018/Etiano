import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import profile from '../../assests/profile.png';
import { Auth } from '../../context/authContext';
import axios from 'axios';

const ProfileDetails = () => {
  const authCtx = useContext(Auth);
  const token = authCtx.token;
  const [profileData, setProfileData] = useState({});

  const [userData, setUserData] = useState("");
  const logoutHandler = () => {
    authCtx.logout();
  };

  useEffect(() => {
    const getProfileData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      };
      const res = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/auth/me',
        config
      );

      const resData = res.data;
      setProfileData(resData);
      let lo = localStorage.setItem('user', JSON.stringify(resData));
      const data = localStorage.getItem('user');
      let ss = data;
      setUserData(ss);
      // setUserData(JSON.parse(ss));
    };

    getProfileData();
  }, []);

  return (


    <div className='font-rubik'>
      <div className='flex flex-wrap items-center justify-start gap-6'>
        <div className='overflow-hidden rounded-full'>
          <img src={profile} alt='' className='object-center w-32 h-32' />
        </div>
        <div>
          <h6 className='mb-3 text-xl font-medium text-gray-100 md:text-3xl md:mb-5'>
            Hi There User !
           {/* {userData} */}
          </h6>
          <NavLink
            to='/signin'
            className='text-gray-400 transition-all duration-200 hover:text-brand-text md:text-lg py-4 bg-amber-600' style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: '5px', color: 'rgba(252, 96, 17,1)' }}
            onClick={logoutHandler}
          >
            Sign Out
          </NavLink>

        </div>
      </div>

      <div className='my-8 md:my-14'>
        <div className='grid mb-10 sm:grid-cols-2 sm:gap-4'>
          <h5 className='mb-4 text-2xl font-medium md:text-3xl text-brand-text md:mb-8'>
            Profile Details
          </h5>

          <Link to='/editProfile'>
            <p className='text-sm text-gray-300 transition-all duration-200 cursor-pointer max-w-max md:text-bas'>
              <i className='fa fa-pencil'></i> Edit Profile
            </p>
          </Link>
        </div>

        <div className='grid gap-8 place-content-between sm:grid-cols-2'>
          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl'>Name</h6>
            <p className='text-gray-400 md:text-lg'>{profileData.name}</p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl max-w-max'>
              Email
            </h6>
            <p className='text-gray-400 md:text-lg max-w-max'>
              {profileData.email}
            </p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl'>Phone</h6>
            <p className='text-gray-400 md:text-lg'>{profileData.phone}</p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl max-w-max'>
              Password
            </h6>
            <p className='text-gray-400 md:text-lg max-w-max'>*********</p>
          </div>

          <div className='mb-2 md:mb-8'>
            <h6 className='text-lg text-gray-100 md:text-xl max-w-max'>
              Country
            </h6>
            <p className='text-gray-400 md:text-lg max-w-max'>
              {profileData.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
