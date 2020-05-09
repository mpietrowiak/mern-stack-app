import {createContext} from 'react';

export const UserContext = createContext({
  userData: {
    username: null,
    userToken: null
  },
  setUserData: null
});