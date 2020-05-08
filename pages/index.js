import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import HomeView from '../views/HomeView';
import UserProfileView from '../views/UserProfileView';
import CookiesDemoView from '../views/CookiesDemoView';
import Header from '../components/Header';
import { UserContext } from '../context/UserContext';
import { parseCookies, setCookie, destroyCookie } from 'nookies';

const StyledPaper = styled(Paper)({
  padding: '30px'
});

const Index = ({ cookies: { username, userToken } }) => {
  const [userData, setUserData] = useState({ username, userToken });

  function setUserDataWithCookie(userData) {
    setCookie(null, 'username', userData.username);
    setCookie(null, 'userToken', userData.userToken);
    setUserData(userData);
  }

  function unsetUserData() {
    destroyCookie(null, 'username');
    destroyCookie(null, 'userToken');
    setUserData({
      username: null,
      userToken: null
    });
  }

  return (
    <UserContext.Provider value={{ userData, setUserData: setUserDataWithCookie, unsetUserData }}>
      <Container>
        <StyledPaper>
          <Header></Header>
          <main>
            <Route path="/" exact>
              <HomeView></HomeView>
            </Route>
            <Route path="/user" exact>
              <UserProfileView></UserProfileView>
            </Route>
            <Route path="/cookies" exact>
              <CookiesDemoView></CookiesDemoView>
            </Route>          
          </main>
        </StyledPaper>
      </Container>
    </UserContext.Provider>
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