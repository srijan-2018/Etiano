import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import TrackOrder from './pages/TrackOrder';
import MyProfile from './pages/MyProfile';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import About from './pages/About';
import Genie from './pages/Genie';
import ScrollToTop from './components/misc/ScrollToTop';
import Menu from './pages/Menu';
import Error404 from './pages/Error404';
import { Auth } from './context/authContext';
import RestaurantProductsPage from './pages/RestaurantProductsPage';
import AllBlogs from './pages/AllBlogs';
import BlogDetailsPage from './pages/BlogDetailsPage';
import MycartPage from './pages/MycartPage';
import Wishlist from './pages/Wishlist';
import Navbar from './components/ui/Navbar';
import Payment from './pages/Payment';
import Checkout from './pages/Checkout';
import ForgotPassword from './pages/ForgotPassword';
import CheckOTP from './pages/CheckOTP';
import SetNewPassword from './pages/SetNewPassword';
import EditProfile from './components/myProfile/EditProfile';
import GenieAddress from './components/genie/GenieAddress';
import Footer from './components/ui/Footer';
import OrderList from './pages/OrderList';

const App = () => {
  const authCtx = useContext(Auth);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Router>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          {isLoggedIn && <Route path='/about' element={<About />} />}
          <Route path='/menu' element={<Menu />} />
          <Route
            path='/menu/restaurant/:id'
            element={<RestaurantProductsPage />}
          />
          <Route path='/genie' element={<Genie />} />
          <Route path='/cart' element={<MycartPage />} />
          {isLoggedIn && <Route path='/checkout' element={<Checkout />} />}
          {!isLoggedIn && (
            <Route
              path='/checkout'
              element={<Navigate replace={true} to='/menu' />}
            />
          )}
          <Route path='/wishlist' element={<Wishlist />} />
          {!isLoggedIn && <Route path='/signup' element={<Signup />} />}
          {!isLoggedIn && <Route path='/signin' element={<SignIn />} />}
          {isLoggedIn && <Route path='/profile' element={<MyProfile />} />}
          {!isLoggedIn && (
            <Route
              path='/profile'
              element={<Navigate replace={true} to='/' />}
            />
          )}

          <Route path='/privacyPolicy' element={<Privacy />} />
          <Route path='/genieAddress' element={<GenieAddress />} />
          <Route path='/news' element={<AllBlogs />} />
          <Route path='/editProfile' element={<EditProfile />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/checkOTP' element={<CheckOTP />} />
          <Route path='/setNewPassword' element={<SetNewPassword />} />
          <Route path='/news/newsDetails/:id' element={<BlogDetailsPage />} />
          <Route path='/profile/orders' element={<TrackOrder />} />

          <Route path='/profile/orderlist' element={<OrderList />} />
          {isLoggedIn && <Route path='/payment' element={<Payment />} />}
          {!isLoggedIn && (
            <Route
              path='/payment'
              element={<Navigate replace={true} to='/menu' />}
            />
          )}
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </Router>
  );
};

export default App;
