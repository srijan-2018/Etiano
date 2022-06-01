/*
1. Add state and handle form submission.
2. Add form validation.
*/

import React, { useRef, useContext } from 'react';
import taco from '../assests/taco.png';
import burger from '../assests/burger.png';
import omlet from '../assests/omlet.png';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthNav from '../components/ui/AuthNav';
import axios from 'axios';
import { Auth } from '../context/authContext';

const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const history = useNavigate();

  const authCtx = useContext(Auth);

  const register = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/auth/signup',
      {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
      }
    );

    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    phoneRef.current.value = '';

    if (response.status === 200) {
      const data = await response.data;
      const expirationTime = new Date(
        new Date().getTime() + +data.expires_in * 1000
      );
      authCtx.login(data.access_token, expirationTime.toISOString());
      console.log(data);
      history('/', { replace: true });
    } else {
      return alert('Error');
    }
  };

  return (
    <div className='font-rubik'>
      <AuthNav className='relative' />
      <div className='relative py-8 lg:bg-no-repeat lg:bg-center lg:bg-signup md:py-12 lg:py-16'>
        <img src={taco} alt='' className='absolute w-48 lg:hidden max-h-48' />
        <img
          src={burger}
          alt=''
          className='absolute w-48 top-60 right-10 lg:hidden max-h-48'
        />
        <img
          src={omlet}
          alt=''
          className='absolute w-48 top-1/2 left-20 lg:hidden max-h-48'
        />
        {/* <div className='top-0 left-0 w-full h-full lg:absolute opacity-40 bg-primary'></div> */}
        <div className='container relative flex items-center justify-center lg:justify-end '>
          <form onSubmit={register}>
            <h4 className='mb-6 text-2xl font-semibold text-center text-gray-100 md:mb-10 lg:mb-14 md:text-4xl'>
              Sign Up
            </h4>
            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Name
                </label>
              </div>
              <input
                type='text'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl focus:bg-transparent'
                required
                ref={nameRef}
              />
            </div>

            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Email
                </label>
              </div>
              <input
                type='email'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl'
                required
                ref={emailRef}
              />
            </div>

            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Phone
                </label>
              </div>
              <input
                type='number'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl'
                required
                ref={phoneRef}
              />
            </div>

            <div className='mb-10 md:mb-14'>
              <div className='mb-2 md:mb-3'>
                <label
                  htmlFor=''
                  className='text-lg font-medium text-gray-100 md:text-xl'
                >
                  Password
                </label>
              </div>
              <input
                type='password'
                className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl'
                required
                ref={passwordRef}
              />
            </div>

            <button
              type='submit'
              className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg mb-7 md:mb-12 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
            >
              Signup
            </button>
            <p className='font-normal text-gray-100 md:text-lg'>
              Already Have An Account ?{' '}
              <NavLink to='/signin' className='text-brand-text'>
                Sign In
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
