import React from 'react';

import { Route } from 'react-router-dom';
import HomeView from '../views/HomeView';
import UserProfileView from '../views/UserProfileView';
import LoginView from '../views/LoginView';
import { parseCookies } from 'nookies';
import UserProvider from '../providers/UserProvider';

const Index = ({ cookies: { username, userToken } }) => {
  return (
    <UserProvider username={username} userToken={userToken}>
      <Route path="/" exact>
        <HomeView></HomeView>
      </Route>
      <Route path="/user" exact>
        <UserProfileView></UserProfileView>
      </Route>
      <Route path="/login" exact>
        <LoginView></LoginView>
      </Route>          
    </UserProvider>
  )
};

export async function getServerSideProps(context) {
  const cookies = parseCookies(context);
  return {
    props: {
      cookies
    }
  }
}

export default Index;