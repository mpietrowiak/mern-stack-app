import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav style={{marginBottom:'30px'}}>
      <Link to="/">Home</Link> &nbsp;| &nbsp;
      <Link to="/user">User profile</Link> &nbsp;| &nbsp;
      <Link to="/cookies">Cookies demo</Link>      
    </nav>
  )
}