import React, { useContext, useState, useEffect } from 'react';
import { Cart } from '../../context/cartContext';
import { Auth } from '../../context/authContext';
import axios from 'axios';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

// const __DEV__ = document.domain === 'localhost';

const CheckoutBody = () => {
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    pin: '',
    state: '',
  });

  const [razorpayResponse, setRazorPayResponse] = useState({});

  const [coupons, setCoupons] = useState([]);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const applyCoupon = () => {
    setIsCouponApplied(true);
  };

  const cartCtx = useContext(Cart);
  const cartLength = cartCtx.cartLength;

  const authCtx = useContext(Auth);
  const token = authCtx.token;

  const itemArray = [];
  cartCtx.cart.forEach((item) => {
    const quantity = item.quantity;
    const itemBill = item.product_selling_price * quantity;
    itemArray.push(itemBill);
  });

  const initialBill = 0;
  const totalBill = itemArray.reduce((acc, item) => acc + item, initialBill);

  const handleFormChange = (e) => {
    e.persist();
    setCheckoutForm({ ...checkoutForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getCoupons = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const res = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/auth/coupon',
        config
      );

      const resData = await res.data.data;

      console.log(resData);
      setCoupons(resData);
    };

    getCoupons();
  }, []);

  const filteredCoupons = coupons.filter(
    (coupon) => coupon.condition <= totalBill
  );

  if (filteredCoupons.length === 0) {
    console.log('Sorry, no coupons found');
  } else {
    console.log(filteredCoupons);
  }

  const submitOrder = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const amount = isCouponApplied
      ? Math.floor(
          totalBill - (totalBill / 100) * filteredCoupons[0].discount
        ) * 100
      : totalBill * 100;
    console.log(amount);

    let formData = new FormData();
    formData.append('state', checkoutForm.state);
    // formData.append('amount', amount);
    formData.append('coupon_code', filteredCoupons[0].coupon_id);

    const response = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/auth/order_id',
      formData,
      config
    );

    const orderData = response.data.data;
    console.log(orderData);

    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }
    const data = {
      name: checkoutForm.name,
      phone: checkoutForm.phone,
      email: checkoutForm.email,
      address: checkoutForm.address,
      country: checkoutForm.country,
      pin: checkoutForm.pin,
    };

    const options = {
      key: 'rzp_test_pLeJZKECvw4lZM', // Enter the Key ID generated from the Dashboard
      amount: orderData.amount / 100,
      name: 'Eatiano',
      description: 'Test Transaction',
      order_id: orderData.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        console.log(response);
        setRazorPayResponse(response);

        const responseData = new FormData();
        responseData.append('order_id', orderData.id);
        responseData.append(
          'razorpay_sig',
          razorpayResponse.razorpay_signature
        );
        responseData.append('payment_id', razorpayResponse.razorpay_payment_id);
        const validateResponse = axios.post(
          'https://achievexsolutions.in/current_work/eatiano/api/auth/payment_validation',
          responseData,
          config
        );
        const validationData = validateResponse;
        console.log(validationData);

        validatePayment();
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: data.phone,
      },
      notes: {
        address: data.address,
        country: data.country,
        pin: data.pin,
      },
      theme: {
        color: '#2F343A',
      },
    };

    console.log(`Options ${options.order_id}`);

    const paymentObject = new window.Razorpay(options);

    paymentObject.on('payment.failed', function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
    paymentObject.open();

    setCheckoutForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      country: '',
      pin: '',
      state: '',
    });
  };

  const validatePayment = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const responseData = new FormData();
    responseData.append('order_id', razorpayResponse.razorpay_order_id);
    responseData.append('razorpay_sig', razorpayResponse.razorpay_signature);
    responseData.append('payment_id', razorpayResponse.razorpay_payment_id);
    const validateResponse = await axios.post(
      'https://achievexsolutions.in/current_work/eatiano/api/auth/payment_validation',
      responseData,
      config
    );
    const validationData = validateResponse.data;

    
    console.log(validationData);
  };



  return (
    <div className='container grid gap-24 my-16 md:my-24 lg:my-40 md:grid-cols-2'>
      <div className='order-2 md:order-1'>
        <div>
          <form onSubmit={submitOrder}>
            <div className='mb-6 md:mb-9'>
              <label>
                <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                  Name
                </h6>
              </label>
              <input
                name='name'
                type='text'
                className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                required
                onChange={handleFormChange}
                value={checkoutForm.name}
              />
            </div>

            <div className='mb-6 md:mb-9'>
              <label>
                <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                  Email
                </h6>
              </label>
              <input
                name='email'
                type='email'
                className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                required
                onChange={handleFormChange}
                value={checkoutForm.email}
              />
            </div>

            <div className='mb-6 md:mb-9'>
              <label>
                <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                  Phone
                </h6>
              </label>
              <input
                name='phone'
                type='number'
                className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                required
                onChange={handleFormChange}
                value={checkoutForm.phone}
              />
            </div>

            <div className='mb-6 md:mb-9'>
              <label>
                <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                  Address
                </h6>
              </label>
              <textarea
                name='address'
                cols='30'
                rows='3'
                className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                required
                onChange={handleFormChange}
                value={checkoutForm.address}
              ></textarea>
            </div>

            <div className='mb-6 md:mb-9'>
              <label>
                <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                  State
                </h6>
              </label>
              <input
                name='state'
                type='text'
                className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                required
                onChange={handleFormChange}
                value={checkoutForm.state}
              />
            </div>

            <div className='flex items-center justify-between gap-4 mb-10 md:mb-14'>
              <div>
                <label>
                  <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                    Country
                  </h6>
                </label>
                <input
                  name='country'
                  type='text'
                  className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                  required
                  onChange={handleFormChange}
                  value={checkoutForm.country}
                />
              </div>

              <div>
                <label>
                  <h6 className='mb-4 text-lg font-medium text-gray-100 lg:text-xl md:mb-6'>
                    Pin Code
                  </h6>
                </label>
                <input
                  name='pin'
                  type='number'
                  className='w-full px-4 py-2 text-gray-200 rounded-lg outline-none lg:text-lg focus:ring-2 ring-offset-2 ring-secondary bg-secondary'
                  required
                  onChange={handleFormChange}
                  value={checkoutForm.pin}
                />
              </div>
            </div>

            {/* <div className='flex flex-wrap items-center justify-end gap-4'>
              
            </div> */}
            <button className='w-full px-8 py-3 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg hover:text xl:w-auto bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Pay With RazorPay
            </button>
          </form>
        </div>
      </div>

      <div className='flex flex-col order-1 shadow-lg p-9 lg:p-16 md:order-2 bg-secondary rounded-xl'>
        <h4 className='mb-10 text-2xl font-medium text-gray-200 xl:text-4xl lg:mb-14'>
          Order Summary
        </h4>

        <div className='flex items-center justify-between gap-4 mb-6 md:mb-9'>
          <h6 className='text-lg text-gray-300 xl:text-2xl'>Total Items:</h6>
          <p className='text-lg font-medium text-gray-100 xl:text-2xl'>
            {cartLength}
          </p>
        </div>

        <div className='flex items-center justify-between gap-4 mb-6 md:mb-9'>
          <h6 className='text-lg text-gray-300 xl:text-2xl'>Sub Total:</h6>
          <p className='text-lg font-medium text-gray-100 xl:text-2xl'>
            Rs. {totalBill}
          </p>
        </div>

        <div>
          <h6 className='mt-10 mb-5 text-gray-200 lg:text-lg'>Coupon (s)</h6>
          {filteredCoupons.length === 0 ? (
            <div className='p-4 bg-primary'>
              <p className='font-medium lg:text-lg text-brand-text'>
                Sorry No Coupons Found! Shop More!!
              </p>
            </div>
          ) : (
            <div className='flex flex-wrap items-center justify-between gap-4 p-4 bg-primary'>
              <p className='text-lg lg:text-xl text-cta-dark'>
                {filteredCoupons[0].coupon_code}: {filteredCoupons[0].discount}%
              </p>
              <button
                className='text-blue-300 hover:text-blue-500 lg:text-lg'
                onClick={applyCoupon}
              >
                Apply!!
              </button>
            </div>
          )}
        </div>

        {isCouponApplied && (
          <p className='mt-3 text-sm text-blue-300 lg:text-base'>
            Coupon Applied
          </p>
        )}

        {isCouponApplied && (
          <div className='flex items-center justify-between gap-4 mt-12 md:mt-16'>
            <h6 className='text-lg text-gray-300 xl:text-2xl'>Final Price:</h6>
            <p className='text-lg font-medium text-gray-100 xl:text-2xl'>
              Rs.{' '}
              {Math.floor(
                totalBill - (totalBill / 100) * filteredCoupons[0].discount
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutBody;
