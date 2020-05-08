import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function CookiesDemoView() {
  const { setUserData, unsetUserData } = useContext(UserContext);

  function login() {
    console.log('login button clicked');
    setUserData({
      username: 'matas8@protonmail.com',
      userToken: '1337aaa1337bbb'
    });
  }

  function logout() {
    console.log('logout button clicked');
    unsetUserData();
  }
  return (
    <div>
      <button onClick={login}>Simulate login</button>
      <button onClick={logout}>Simulate logout</button>
    </div>
  )
}