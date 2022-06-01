// Cart Header is the component which has the heading of the page and the two images.
// Cart component contains the actual cart list and the cart items.

// TODOS:
// 3. Add increment / decrement item buttons

import React from 'react';
import CartHeader from '../components/mycart/CartHeader';
// import Navbar from '../components/ui/Navbar';
import MyCart from '../components/mycart/MyCart';

const MycartPage = () => {
  // const reloadCount = Number(sessionStorage.getItem('reloadCount')) || 0;
  // useEffect(() => {
  //   if (reloadCount < 1) {
  //     sessionStorage.setItem('reloadCount', String(reloadCount + 1));
  //     window.location.reload();
  //   } else {
  //     sessionStorage.removeItem('reloadCount');
  //   }
  // }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <CartHeader />
      <MyCart />
    </div>
  );
};

export default MycartPage;
