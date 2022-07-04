import React, { useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Auth } from '../../context/authContext';


function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false);
    }
    document.body.appendChild(script)
  });
}


                                                                                            

const Member = ({ member }) => {

  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;

  async function displayRazorpay(){

    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
        key: "rzp_test_pLeJZKECvw4lZM", // Enter the Key ID generated from the Dashboard
        amount: member.membership_price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Acme Corp",
        description: "Test Transaction",
        handler: function (response){
            console.log("Response::", response);
            console.log("razorpay_payment_id is: ",response.razorpay_payment_id);
            console.log("razorpay_order_id is: ",response.razorpay_order_id);
            console.log("razorpay_signature is: ",response.razorpay_signature)
        },
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },

        "theme": {
            "color": "#3399cc"
        }
    };


    const paymentObject = new window.Razorpay(options);

    paymentObject.on('payment.failed', function (response){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    
    paymentObject.open();
  }

 
  return (
    <div className='px-8 py-12 shadow-lg rounded-xl bg-secondary'>
      <h4 className='mb-3 text-2xl font-semibold text-center text-gray-100 md:mb-5 lg:text-3xl'>
        {member.membership_type_name}
      </h4>
      <h6 className='mb-4 text-lg font-medium text-center text-brand-text md:mb-6 md:text-xl'>
        @ Rs.{member.membership_price}
      </h6>

      <h6 className='mb-4 font-medium text-center text-gray-300 md:mb-6 md:text-lg'>
        Valid For: {member.time_period} Months
      </h6>
      <p className='text-lg font-medium text-center text-cta-dark md:text-xl'>
        {member.discount_percent}% off on all orders!
      </p>



        {!isLoggedIn ? (
          <Link to='/signin'>
            <button target="_blank"className='w-full px-8 py-2 mt-8 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg md:mt-14 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Subscribe
            </button>
          </Link>
        ) : 
          <Link to=''>
            <button onClick={displayRazorpay} target="_blank"className='w-full px-8 py-2 mt-8 text-lg font-medium text-gray-900 transition-all duration-300 rounded-lg md:mt-14 hover:text bg-cta md:text-xl hover:bg-cta-dark hover:scale-110 focus:ring-2 ring-offset-2 ring-cta-dark'>
              Subscribe
            </button>
          </Link>
        }
    </div>
  );
};

export default Member;
