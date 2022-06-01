/*
1. Add state and handle form submission.
2. Add form validation.
3. Add third party authentication using facebook and google
*/

import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import taco from '../assests/taco.png';
import burger from '../assests/burger.png';
import omlet from '../assests/omlet.png';
import { NavLink } from 'react-router-dom';
import AuthNav from '../components/ui/AuthNav';
import { Auth } from '../context/authContext';

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useNavigate();

  const authCtx = useContext(Auth);

  const [loading, setLoading] = useState(false);

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/auth/login',
      {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
    );

    setLoading(false);
    emailRef.current.value = '';
    passwordRef.current.value = '';

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
    <div>
      <div className='font-rubik'>
        <AuthNav />
        <div className='relative py-8 lg:bg-no-repeat lg:bg-center lg:bg-login md:py-12 lg:py-20'>
          <img src={taco} alt='' className='absolute w-48 lg:hidden max-h-48' />
          <img
            src={burger}
            alt=''
            className='absolute w-48 top-40 right-10 lg:hidden max-h-48'
          />
          <img
            src={omlet}
            alt=''
            className='absolute w-48 top-1/2 left-10 lg:hidden max-h-48'
          />
          {/* <div className='top-0 left-0 w-full h-full lg:absolute opacity-40 bg-primary'></div> */}
          <div className='container relative flex items-center justify-center lg:justify-start'>
            <div className='flex flex-col'>
              <div>
                <form onSubmit={loginHandler}>
                  <h4 className='mb-6 text-2xl font-semibold text-center text-gray-100 md:mb-10 lg:mb-14 md:text-4xl'>
                    Sign In
                  </h4>

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
                        Password
                      </label>
                    </div>
                    <input
                      type='password'
                      className='w-full py-1 text-lg text-gray-200 bg-transparent border-b-2 border-gray-100 outline-none md:text-xl'
                      required
                      ref={passwordRef}
                    />
                    <Link to='/forgotPassword'>
                      <p className='mt-3 text-sm text-gray-300 transition-all duration-200 cursor-pointer lg:text-base hover:text-gray-400'>
                        Forgot Password
                      </p>
                    </Link>
                  </div>

                  {!loading && (
                    <button
                      type='submit'
                      className='w-full px-8 py-2 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg mb-7 md:mb-12 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'
                    >
                      Signin
                    </button>
                  )}

                  {loading && (
                    <p className='text-xl text-center text-gray-200'>
                      Signing you in...
                    </p>
                  )}

                  {/* <p className='text-lg font-medium text-center text-gray-100 md:text-xl lg:text-2xl mb-7 md:mb-12'>
                    OR
                  </p> */}
                </form>
              </div>

              <div>
                {/* <div>
                  <button className='w-full px-8 py-2 mb-5 text-gray-100 transition-all duration-300 rounded-lg md:mb-9 hover:text bg-fb-blue md:text-lg hover:bg-fb-blue-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-fb-blue-dark'>
                    <i className='mr-2 fab fa-facebook'></i> Signin with
                    Facebook
                  </button>
                </div>

                <div>
                  <button className='w-full px-8 py-2 mb-5 text-gray-100 transition-all duration-300 rounded-lg md:mb-9 hover:text bg-google-red md:text-lg hover:bg-google-red-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-google-red-dark'>
                    <i className='mr-2 fab fa-google'></i> Signin with Google
                  </button>
                </div> */}

                <p className='font-normal text-gray-100 md:text-lg'>
                  Don't Have An Account ?{' '}
                  <NavLink to='/signup' className='text-brand-text'>
                    Sign Up
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
