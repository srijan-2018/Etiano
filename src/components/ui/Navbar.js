import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { Auth } from '../../context/authContext';
import { Location } from '../../context/locationContext';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { Cart } from '../../context/cartContext';

const Navbar = () => {
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [navToggle, setNavToggle] = useState(false);
  const [address, setAddress] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [places, setPlaces] = useState('');

  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;
  const locationCtx = useContext(Location);
  const cartCtx = useContext(Cart);

  useEffect(() => {
    const getAddress = async () => {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationCtx.long},${locationCtx.lat}.json?access_token=pk.eyJ1IjoicG5zaW5naCIsImEiOiJjbDA2Zm9udWMwZDBzM2VyMnJvcTVnbWtxIn0.z4soi_Ue9zL8XoPVvgIAvQ`
      );

      const resData = res.data.features[2];
      setAddress(resData);
      // console.log(resData);
    };

    getAddress();
  }, [locationCtx.lat, locationCtx.long]);

  const showMobNav = () => {
    setNavToggle((value) => !value);
  };

  const setNewLocation = () => {
    setDropdownToggler((value) => !value);
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setPlaces('');
    localStorage.setItem('lat', latLng.lat);
    localStorage.setItem('long', latLng.lng);
    setShowModal(false);
    window.location.reload(false);
  };

  return (
    <>
      <div className='fixed top-0 left-0 z-50 w-full shadow-lg opacity-100 bg-secondary'>
        <nav className='shadow-lg bg-secondary font-rubik'>
          <div className='container flex flex-wrap items-center justify-between py-3 md:py-4'>
            <NavLink
              to='/'
              exact='true'
              className='text-3xl font-semibold text-gray-100 md:text-4xl'
            >
              Logo
            </NavLink>

            <div className='hidden sm:block'>
              <h6
                className='py-2 text-gray-200 cursor-pointer md:text-lg'
                onClick={setNewLocation}
              >
                {locationCtx.lat !== null && locationCtx.long !== null
                  ? `${address.place_name}`
                  : 'Set Location...'}
                <span>
                  <i className='fas fa-chevron-down text-brand-text'></i>
                </span>
              </h6>

              {dropdownToggler ? (
                <div
                  className='px-6 py-3 rounded-md shadow-lg cursor-pointer bg-primary'
                  onClick={() => setShowModal(true)}
                >
                  <h6 className='text-gray-200 transition-all duration-200 md:text-lg hover:text-brand-text'>
                    <i className='fa fa-map-marker'></i> Set New Location
                  </h6>
                </div>
              ) : (
                ''
              )}
            </div>

            <div className='lg:hidden'>
              <i
                className='text-gray-200 transition-all duration-200 fa fa-bars fa-2x hover:text-brand-text'
                onClick={showMobNav}
              ></i>
            </div>

            <div className='hidden lg:block'>
              <ul className='hidden list-none lg:flex'>
                <li className='py-2 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink
                    to='/about'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-brand-text'
                        : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink
                    to='/menu'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-brand-text'
                        : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                    }
                  >
                    Menu
                  </NavLink>
                </li>
                <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink
                    to='/genie'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-brand-text'
                        : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                    }
                  >
                    Genie
                  </NavLink>
                </li>
                {isLoggedIn && (
                  <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                    <NavLink
                      to='/profile'
                      className={({ isActive }) =>
                        isActive
                          ? 'text-brand-text'
                          : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                      }
                    >
                      My Profile
                    </NavLink>
                  </li>
                )}

                {!isLoggedIn && (
                  <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                    <NavLink
                      to='/signup'
                      className={({ isActive }) =>
                        isActive
                          ? 'text-brand-text'
                          : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                      }
                    >
                      Sign Up
                    </NavLink>
                  </li>
                )}
                <li className='py-2 ml-6 font-medium text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink
                    to='/cart'
                    className={({ isActive }) =>
                      isActive
                        ? 'text-brand-text'
                        : 'text-gray-300 transition-all duration-200 hover:text-brand-text'
                    }
                  >
                    <button>
                      <i className='fa fa-shopping-cart'></i>{' '}
                      <span className='ml-2'>Cart </span>
                      <span className='ml-2 font-medium text-brand-text'>
                        {cartCtx.cartLength > 0 ? cartCtx.cartLength : ''}
                      </span>
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={
              'container transition-all duration-300 ' +
              (navToggle
                ? ' translate-y-0 py-4 opacity-100 h-full'
                : ' -translate-y-96 opacity-0 h-0')
            }
          >
            <ul className='grid grid-cols-3 gap-6 list-none place-items-center'>
              <li className='col-span-3 sm:hidden'>
                <div>
                  <h6
                    className='py-2 text-gray-200 cursor-pointer md:text-lg'
                    onClick={setNewLocation}
                  >
                    {locationCtx.lat !== null && locationCtx.long !== null
                      ? `${address.place_name}`
                      : 'Set Location...'}
                    <span>
                      <i className='fas fa-chevron-down text-brand-text'></i>
                    </span>
                  </h6>

                  {dropdownToggler ? (
                    <div
                      className='px-6 py-3 rounded-md shadow-lg cursor-pointer bg-primary'
                      onClick={() => setShowModal(true)}
                    >
                      <h6 className='text-gray-200 transition-all duration-200 md:text-lg hover:text-brand-text'>
                        <i className='fa fa-map-marker'></i> Set New Location
                      </h6>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </li>
              <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink to='/about'>About Us</NavLink>
              </li>
              <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink to='/menu'>Menu</NavLink>
              </li>
              <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink to='/genie'>Genie</NavLink>
              </li>
              {isLoggedIn && (
                <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink to='/profile'>My Profile</NavLink>
                </li>
              )}
              {!isLoggedIn && (
                <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                  <NavLink to='/signup'>Sign Up</NavLink>
                </li>
              )}
              <li className='py-2 text-gray-300 transition-all duration-200 md:text-lg hover:text-brand-text'>
                <NavLink to='/cart'>
                  <button>
                    <i className='fa fa-shopping-cart'></i>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {showModal ? (
        <>
          <PlacesAutocomplete
            value={places}
            onChange={setPlaces}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <>
                <div className='container fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none'>
                  <div className='relative w-auto max-w-3xl mx-auto my-40'>
                    <div className='relative flex flex-col w-full bg-gray-100 border-0 rounded-lg shadow-lg outline-none focus:outline-none'>
                      {/* <i className='absolute cursor-pointer top-2 right-4 fa fa-times text-primary hover:text-red-500'></i> */}
                      <div className='relative flex-auto p-9'>
                        <input
                          type='text'
                          className='w-full px-4 py-2 font-medium text-gray-100 bg-gray-900 rounded-md shadow-md lg:text-lg focus:ring-2 ring-offset-4 ring-primary'
                          {...getInputProps({
                            placeholder: 'Type New Location...',
                          })}
                        />

                        <div className='mt-6 md:mt-8 lg:mt-10'>
                          {loading ? (
                            <p className='text-sm text-gray-700'>
                              Loading Places...
                            </p>
                          ) : null}

                          {suggestions.map((suggestion) => {
                            const className = suggestion.active
                              ? 'bg-secondary text-gray-100 py-2 px-3'
                              : 'bg-gray-100 text-primary py-2 px-3';
                            return (
                              <ul
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                })}
                              >
                                <li className='mb-3 font-medium mb:mb-5 lg:text-lg hover:cursor-pointer'>
                                  {suggestion.description}
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='fixed inset-0 z-40 bg-primary opacity-80'></div>
              </>
            )}
          </PlacesAutocomplete>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default Navbar;
