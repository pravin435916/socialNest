import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { backendApi } from '../Url';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserInfo = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get(`${backendApi}/api/users/user-info`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(res.data.user);
        } catch (error) {
          console.error(error.response?.data?.message || 'An error occurred');
        }
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
