import {
  Container,
  Header,
  Nav,
  Main,
  Footer,
  Copyright,
} from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Nav>PHONEBOOK</Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Copyright>© Developed by Oleh Protasevych 2023</Copyright>
      </Footer>
    </Container>
  );
};
export default Layout;
