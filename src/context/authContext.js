import { createContext, useState, useEffect, useCallback } from 'react';

let logoutTimer;
export const Auth = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustedExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjustedExpirationTime - currentTime;
  return remainingTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpirationTime = localStorage.getItem('expirationTime');

  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

const AuthProvider = ({ children }) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  console.log(userIsLoggedIn);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const login = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logout, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logout, tokenData.duration);
    }
  }, [tokenData, logout]);

  const valueCtx = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: login,
    logout: logout,
  };

  return <Auth.Provider value={valueCtx}>{children}</Auth.Provider>;
};

export default AuthProvider;
