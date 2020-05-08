import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import HomeView from '../views/HomeView';
import UserProfileView from '../views/UserProfileView';
import CookiesDemoView from '../views/CookiesDemoView';
import Header from '../components/Header';
import { parseCookies } from 'nookies';
import UserProvider from '../providers/UserProvider';

const StyledPaper = styled(Paper)({
  padding: '30px'
});

const Index = ({ cookies: { username, userToken } }) => {
  return (
    <UserProvider username={username} userToken={userToken}>
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