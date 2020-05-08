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
import { parseCookies} from 'nookies';

const StyledPaper = styled(Paper)({
  padding: '30px'
});

const Index = ({ cookies }) => {
  const { username, userToken } = cookies;
  // const [text, setText] = useState('Loading...');

  // useEffect(() => {
  //   async function getText() {
  //     const response = await fetch('/api');
  //     const json = await response.json();
  //     setText(json.world);
  //   }
  //   getText();
  // }, []);

  return (
    <UserContext.Provider value={{ username, userToken }}>
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