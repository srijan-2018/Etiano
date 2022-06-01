import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [userEmail, setUserEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    setUserEmail('');
  };

  return (
    <div className='z-50 py-16 bg-primary'>
      <div className='container font-rubik'>
        <div className='grid gap-4 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4 place-content-center md:place-content-between'>
          <div className='my-5'>
            <h3 className='mb-5 text-2xl font-medium text-center text-gray-100 lg:text-4xl md:text-left md:mb-8'>
              Eatiano
            </h3>
            <p className='mb-4 text-gray-300 lg:text-lg'>Follow Us:</p>
            <div>
              <a
                href='https://www.facebook.com'
                target='_blank'
                rel='noreferrer'
              >
                <i className='mr-4 text-gray-300 fab fa-facebook fa-2x hover:text-brand-text'></i>
              </a>
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noreferrer'
              >
                <i className='mr-4 text-gray-300 fab fa-linkedin fa-2x hover:text-brand-text'></i>
              </a>
              <a
                href='https://www.twitter.com'
                target='_blank'
                rel='noreferrer'
              >
                <i className='mr-4 text-gray-300 fab fa-twitter fa-2x hover:text-brand-text'></i>
              </a>
              <a
                href='https://www.instagram.com'
                target='_blank'
                rel='noreferrer'
              >
                <i className='mr-4 text-gray-300 fab fa-instagram fa-2x hover:text-brand-text'></i>
              </a>
            </div>
          </div>

          <div className='my-5'>
            <h6 className='mb-5 text-lg font-medium text-gray-100 md:text-xl md:mb-10'>
              Platform
            </h6>
            <ul>
              <Link to='/genie'>
                <li className='mb-3 text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                  Genie
                </li>
              </Link>
              <Link to='/wishlist'>
                <li className='mb-3 text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                  Wishlist
                </li>
              </Link>
              <Link to='/privacyPolicy'>
                <li className='text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text'>
                  Privacy Policy
                </li>
              </Link>
            </ul>
          </div>

          <div className='my-5'>
            <h6 className='mb-5 text-lg font-medium text-gray-100 md:text-xl md:mb-10'>
              Links
            </h6>
            <ul>
              <Link to='/about'>
                <li className='mb-3 text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                  About Us
                </li>
              </Link>
              <Link to='/news'>
                <li className='mb-3 text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                  News
                </li>
              </Link>
              <li className='mb-3 text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                Terms of Use
              </li>
            </ul>
          </div>

          <div className='my-5'>
            <h6 className='mb-5 text-lg font-medium text-gray-100 md:text-xl md:mb-10'>
              Contact
            </h6>
            <ul>
              <li className='mb-3 text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                <i className='fa fa-phone'> : </i> +915555555555
              </li>
              <li className='mb-3 text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text md:mb-5'>
                <i className='fa fa-envelope'> : </i> info@restaurant.com
              </li>
              <li className='text-gray-400 transition-all duration-200 cursor-pointer md:text-lg hover:text-brand-text'>
                <i className='fas fa-map-marker'> : </i> Lorem ipsum dolor sit
                amet consectetur.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
