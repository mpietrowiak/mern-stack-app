import React, { useContext } from 'react';
import { UserContext } from '@/context/UserContext';

export default function LoginView() {
  const { setUserData, unsetUserData } = useContext(UserContext);

  function submitForm(event) {
    const [inputs, setInputs] = useState({
      username: '',
      password: ''
    });

    event.preventDefault();

    fetch('/api/auth', {
      //TODO
    });
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <fieldset>
          <div>
            <label htmlFor="login">Login:</label>
            <input type="text" id="login" />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </fieldset>
      </form>
    </div>
  )
}