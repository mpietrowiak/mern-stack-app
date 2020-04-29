import './App.css';
import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const StyledPaper = styled(Paper)({
  padding: '20px'
});

const App = () => (
  <Container>
    <StyledPaper>
      <h1>Hello world</h1>
    </StyledPaper>
  </Container>
);

export default App;