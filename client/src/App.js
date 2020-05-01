import './App.css';
import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';

const StyledPaper = styled(Paper)({
  padding: '20px'
});

const App = () => {
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
        <h3 style={{color:'red'}}>{text}</h3>
      </StyledPaper>
    </Container>
  )
};

export default App;