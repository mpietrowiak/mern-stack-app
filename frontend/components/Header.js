import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '@/context/UserContext';

export default function Header() {
  const { userData, logout } = useContext(UserContext);

  return (
    <header style={{marginBottom:'30px', display: 'flex', justifyContent: 'space-between'}}>
      <nav>
        <Link to="/">Home</Link> &nbsp;| &nbsp;
        <Link to="/user">User profile</Link> &nbsp;| &nbsp;
        <Link to="/login">Login</Link><br /><br />
      </nav>

      <div className="user">
        {userData.username ? (
          <div>
            Logged in as: <b>{userData.username}</b>&nbsp;
            <a href="#" onClick={logout}>Logout</a>
          </div>
        ) : (
          <div>
            Not logged in. &nbsp;
            <Link to="/login">Login</Link>
          </div>
        )}
      </div>
    </header>
  )
}