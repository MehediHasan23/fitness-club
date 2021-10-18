import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Menubar.css'
import navLogo from '../../images/nevbar.png'
const Menubar = () => {
  return (
    <div>
      <Navbar  bg="dark" expand="lg">
  <Container>
    <Navbar.Brand as={NavLink} className="text-white" to="/home"><img src={navLogo} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto ">
      <Nav.Link as={NavLink} to="/home" className="text-white">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about" className="text-white">About</Nav.Link>
      <Nav.Link as={NavLink} to="/login" className="text-white">Login</Nav.Link>
      <Nav.Link as={NavLink} to="/membership" className="text-white">Membership</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Menubar;