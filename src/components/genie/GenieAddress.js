import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Auth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const GenieAddress = () => {
  const [genieAddress, setGenieAddress] = useState({
    fromArea: '',
    fromCity: '',
    fromState: '',
    fromPincode: '',
    fromCountry: '',
    fromLat: '',
    fromLong: '',
    toArea: '',
    toCity: '',
    toState: '',
    toPincode: '',
    toCountry: '',
    toLat: '',
    toLong: '',
  });

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const history = useNavigate();

  const genieAddressHandler = (e) => {
    setGenieAddress({ ...genieAddress, [e.target.name]: e.target.value });
  };

  const genieSubmitHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const formData = new FormData();
    formData.append('fromArea', genieAddress.fromArea);
    formData.append('fromCity', genieAddress.fromCity);
    formData.append('fromState', genieAddress.fromState);
    formData.append('fromPincode', genieAddress.fromPincode);
    formData.append('fromCountry', genieAddress.fromCountry);
    formData.append('fromLat', genieAddress.fromLat);
    formData.append('fromLng', genieAddress.fromLong);

    formData.append('toArea', genieAddress.toArea);
    formData.append('toCity', genieAddress.toCity);
    formData.append('toState', genieAddress.toState);
    formData.append('toPincode', genieAddress.toPincode);
    formData.append('toCountry', genieAddress.toCountry);
    formData.append('toLat', genieAddress.toLat);
    formData.append('toLng', genieAddress.toLong);

    const res = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/auth/momsgini',
      formData,
      config
    );

    const resData = res.data.data;
    console.log(resData);

    history('/menu', { replace: true });
  };

  return (
    <div className='container my-24 md:my-32 lg:my-44 font-rubik'>
      <h1 className='mb-10 text-center text-gray-100 md:text-2xl lg:text-3xl md:mb-16'>
        Send Fooood!!
      </h1>

      <div className='max-w-6xl p-5 mx-auto rounded-lg shadow-lg md:p-10 bg-secondary'>
        <form onSubmit={genieSubmitHandler}>
          <div className='grid gap-20 md:grid-cols-2'>
            <div>
              <div>
                <h4 className='mb-6 text-2xl text-brand-text lg:text-3xl lg:mb-10'>
                  From
                </h4>
                <div className='mb-4 lg:mb-10'>
                  <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                    <label>Area*</label>
                  </h6>
                  <input
                    type='text'
                    required
                    name='fromArea'
                    value={genieAddress.fromArea}
                    onChange={genieAddressHandler}
                    className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                  />
                </div>
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>City*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='fromCity'
                  value={genieAddress.fromCity}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>State*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='fromState'
                  value={genieAddress.fromState}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>Pincode*</label>
                </h6>
                <input
                  type='number'
                  required
                  name='fromPincode'
                  value={genieAddress.fromPincode}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>Country*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='fromCountry'
                  value={genieAddress.fromCountry}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>Latitude*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='fromLat'
                  value={genieAddress.fromLat}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>Longitude*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='fromLong'
                  value={genieAddress.fromLong}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>
            </div>

            <div>
              <div>
                <h4 className='mb-6 text-2xl text-brand-text lg:text-3xl lg:mb-10'>
                  To
                </h4>
                <div className='mb-4 lg:mb-10'>
                  <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                    <label>Area*</label>
                  </h6>
                  <input
                    type='text'
                    required
                    name='toArea'
                    value={genieAddress.toArea}
                    onChange={genieAddressHandler}
                    className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                  />
                </div>
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>City*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='toCity'
                  value={genieAddress.toCity}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>State*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='toState'
                  value={genieAddress.toState}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>Pincode*</label>
                </h6>
                <input
                  type='number'
                  required
                  name='toPincode'
                  value={genieAddress.toPincode}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>Country*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='toCountry'
                  value={genieAddress.toCountry}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div className='mb-4 lg:mb-10'>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>Latitude*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='toLat'
                  value={genieAddress.toLat}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>

              <div>
                <h6 className='mb-3 text-lg font-medium text-gray-200 lg:text-xl md:mb-5'>
                  <label>Longitude*</label>
                </h6>
                <input
                  type='text'
                  required
                  name='toLong'
                  value={genieAddress.toLong}
                  onChange={genieAddressHandler}
                  className='w-full px-3 py-2 text-gray-300 rounded-md outline-none lg:text-lg bg-primary focus:ring-offset-2 ring-2 ring-primary'
                />
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='w-full px-8 py-2 mt-10 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text bg-cta md:text-xl hover:bg-cta-dark hover:-translate-y-3 focus:ring-2 ring-offset-2 ring-cta-dark'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default GenieAddress;
