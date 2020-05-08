import React, {useContext} from 'react';
import { UserContext } from '../context/UserContext';

export default function HomeView() {
  const msg = useContext(UserContext);
  return (
    <div>
      This is the home view!<br />
      From Context: {msg}
    </div>
  )
}