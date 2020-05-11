import React, { useState, useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import { Redirect } from 'react-router';

export default function LoginView() {
  const [flashMessage, setFlashMessage] = useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const { setUserData, userData } = useContext(UserContext);

  async function submitForm(event) {
    event.preventDefault();
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword
      })
    });
    const json = await response.json();
    if (json.user && json.token) {
      setUserData({
        username: json.user.email,
        userToken: json.token
      });
    } else {
      setFlashMessage('Error! Please try logging in again.');
    }
  };

  return (!userData || !userData.username || !userData.userToken) ? (
    <div>
      {flashMessage}
      <form onSubmit={submitForm}>
        <fieldset>
          <div>
            <label htmlFor="login">Login:</label>
            <input 
              type="text" 
              id="email" 
              value={userEmail} 
              onChange={e => setUserEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              value={userPassword} 
              onChange={e => setUserPassword(e.target.value)} />
          </div>
          <button>Login</button>
        </fieldset>
      </form>
    </div>
  ) : <Redirect to="/"></Redirect>
}