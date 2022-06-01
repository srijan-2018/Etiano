import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Auth } from '../../context/authContext';

const EditProfile = () => {
  const [editProfile, setEditProfile] = useState({
    name: '',
    phone: '',
    country: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const history = useNavigate();

  useEffect(() => {
    const profileData = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(
        `https://achievexsolutions.in/current_work/eatiano/api/auth/me`,
        config
      );

      const resData = response.data;
      setEditProfile({
        name: resData.name,
        phone: resData.phone,
        country: resData.country,
      });
    };

    profileData();
  }, []);

  const editProfileHandler = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const editProfileSubmission = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };

    const formData = new URLSearchParams();
    formData.append('name', editProfile.name);
    formData.append('phone', editProfile.phone);
    formData.append('country', editProfile.country);

    const response = await axios.patch(
      `https://achievexsolutions.in/current_work/eatiano/api/auth/profile`,
      formData,
      config
    );

    setEditProfile({
      name: '',
      phone: '',
      country: '',
    });

    const resData = response.data;
    console.log(resData);
    history('/profile', { replace: true });
    window.location.reload();
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Edit Profile
      </h1>

      <div className='max-w-4xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={editProfileSubmission}>
          <div className='grid gap-8 md:grid-cols-2'>
            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Name*</label>
              </h6>
              <input
                type='text'
                required
                name='name'
                value={editProfile.name}
                onChange={editProfileHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Phone*</label>
              </h6>
              <input
                type='text'
                required
                name='phone'
                value={editProfile.phone}
                onChange={editProfileHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>

            <div className='col-span-2 md:col-span-1'>
              <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                <label>Country*</label>
              </h6>
              <input
                type='text'
                required
                name='country'
                value={editProfile.country}
                onChange={editProfileHandler}
                className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
              />
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Edit Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
