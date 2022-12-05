import react,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';
import './AppBar.css';
// import NavDropdown from 'react-bootstrap/NavDropdown';
function AppBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h2 className=' fst-bold' style={{color: "red"}}><span> <i class="bi bi-yelp"></i>Pizza Hut</span></h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className='nav'>
            <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#menu" className='fw-bold'>Menu</Nav.Link>
            <Nav.Link href="#musttry" className='fw-bold'>Offers</Nav.Link>
            <Nav.Link href="#contact" className='fw-bold'>Contact us</Nav.Link>
            <Cart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default AppBar;