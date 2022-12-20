import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar({ authenticatedUser }) {
  return (
    <Navbar>
      <Container>

        <Navbar.Brand href="">Doctor Case Label</Navbar.Brand>

        {
          authenticatedUser ?
            <>
              <Nav className="me-auto">
                <Link to="/" className='Navbar-link'>Home</Link>
                <Link to="link" className='Navbar-link'>Link</Link>
              </Nav>
              <Navbar.Text>
                Signed in as: <Link to="login">{ authenticatedUser }</Link>
              </Navbar.Text>
            </> :
            <Navbar.Text>
              <Link to="login">Login</Link>
            </Navbar.Text>
        }

      </Container>
    </Navbar>
  );
}


export default NavBar;