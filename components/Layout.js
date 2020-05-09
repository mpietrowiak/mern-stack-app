import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import Header from './Header';

const StyledPaper = styled(Paper)({
  padding: '30px'
});

const Layout = ({ children }) => (
  <Container>
    <StyledPaper>
      <Header></Header>
      <main>
        {children}
      </main>
    </StyledPaper>
  </Container>
)

export default Layout;