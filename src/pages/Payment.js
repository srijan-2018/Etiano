import React from 'react';

const Payment = () => {
  var options = {
    key: 'rzp_test_UrYqb5LGWAWmJT', // Enter the Key ID generated from the Dashboard
    amount: '500', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: 'INR',
    name: 'Acme Corp',
    description: 'Test Transaction',
    order_id: 'order_J28b8ScEetIxFU', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature);
    },
    prefill: {
      name: 'Gaurav Kumar',
      email: 'gaurav.kumar@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#2F343A',
    },
  };
  var rzp = new window.Razorpay(options);

  const payment = (e) => {
    e.preventDefault();
    rzp.open();
  };

  return (
    <div className='my-24 text-center font-rubik md:my-32 lg:my-40'>
      <h1 className='text-3xl font-semibold text-gray-200'>Hello World</h1>
      <button onClick={payment}>Pay</button>
    </div>
  );
};

export default Payment;
