import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

export default function Header() {
  const { userData } = useContext(UserContext);

  return (
    <nav style={{marginBottom:'30px'}}>
      <Link to="/">Home</Link> &nbsp;| &nbsp;
      <Link to="/user">User profile</Link> &nbsp;| &nbsp;
      <Link to="/cookies">Cookies demo</Link><br /><br />
      {userData.username ? (`Logged in as: ${userData.username}`) : ('Not logged in.')}  
    </nav>
  )
}