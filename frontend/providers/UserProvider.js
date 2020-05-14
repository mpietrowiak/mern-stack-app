import React, { useState } from 'react';
import { setCookie, destroyCookie } from 'nookies';
import { UserContext } from '@/context/UserContext';

function UserProvider({ username, userToken, children }) {
  const [userData, setUserData] = useState({ username, userToken });

  function setUserDataWithCookie(userData) {
    setCookie(null, 'username', userData.username);
    setCookie(null, 'userToken', userData.userToken);
    setUserData(userData);
  }

  function logout() {
    destroyCookie(null, 'username');
    destroyCookie(null, 'userToken');
    setUserData({
      username: null,
      userToken: null
    });
  }

  return (
    <UserContext.Provider value={{ userData, setUserData: setUserDataWithCookie, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;