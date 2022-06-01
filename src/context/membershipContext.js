import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Auth } from './authContext';

export const Memberships = createContext({
  memberships: [],
});

const MembershipProvider = ({ children }) => {
  const [memberships, setMemberships] = useState([]);
  const authCtx = useContext(Auth);

  const token = authCtx.token;

  useEffect(() => {
    const getMemberships = async () => {
      const config = {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      };

      const res = await axios.get(
        'https://achievexsolutions.in/current_work/eatiano/api/auth/member',
        config
      );

      const resData = res.data.data;
      console.log(resData);
      setMemberships(resData);
    };

    getMemberships();
  }, []);

  const membershipValue = {
    memberships: memberships,
  };

  return (
    <Memberships.Provider value={membershipValue}>
      {children}
    </Memberships.Provider>
  );
};

export default MembershipProvider;
