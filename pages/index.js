import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import {
  Route, Link
} from 'react-router-dom';

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
        <nav>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
          
        </nav>
        <Route path="/" exact>
          <h1>This is the home page.</h1>
        </Route>
        <Route path="/about" exact>
          <h1>This is the about page.</h1>
        </Route>
      </StyledPaper>
    </Container>
  )
};

export default Index;