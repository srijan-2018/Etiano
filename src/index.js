import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import AuthProvider from './context/authContext';
import RestaurantsProvider from './context/restaurantsContext';
import CartProvider from './context/cartContext';
import WishlistProvider from './context/wishlistContext';
import LocationProvider from './context/locationContext';
import MembershipProvider from './context/membershipContext';

ReactDOM.render(
  <AuthProvider>
    <LocationProvider>
      <RestaurantsProvider>
        <CartProvider>
          <WishlistProvider>
            <MembershipProvider>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </MembershipProvider>
          </WishlistProvider>
        </CartProvider>
      </RestaurantsProvider>
    </LocationProvider>
  </AuthProvider>,
  document.getElementById('root')
);
