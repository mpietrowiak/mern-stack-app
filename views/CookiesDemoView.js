import React from 'react';
import { setCookie, destroyCookie } from 'nookies';

export default function CookiesDemoView() {
  function login() {
    setCookie(null, 'username', 'matas8@protonmail.com');
    setCookie(null, 'userToken', 'sometokensialala');
  }

  function logout() {
    destroyCookie(null, 'username');
    destroyCookie(null, 'userToken');
  }
  return (
    <div>
      <button onClick={login}>Simulate login</button>
      <button onClick={logout}>Simulate logout</button>
    </div>
  )
}