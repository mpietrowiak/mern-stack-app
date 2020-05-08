import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import {
  Route, Link
} from 'react-router-dom';
import HomeView from '../views/HomeView';
import UserProfileView from '../views/UserProfileView';
import CookiesDemoView from '../views/CookiesDemoView';
import Header from '../components/Header';

const StyledPaper = styled(Paper)({
  padding: '30px'
});

const Index = () => {
  const [text, setText] = useState('Loading...');

  useEffect(() => {
    async function getText() {
      const response = await fetch('/api');
      const json = await response.json();
      setText(json.world);
    }
    getText();
  }, []);

  return (
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
  )
};

export default Index;