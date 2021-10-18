import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Menubar.css'
import navLogo from '../../images/nevbar.png'
import useProvContext from '../../hooks/useProvContext';
const Menubar = () => {
  const {firebase} = useProvContext();
  const {user, logOut} = firebase;
  const { displayName, photoURL, email } = user;
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
      <Nav.Link as={NavLink} to="/membership" className="text-white">Membership</Nav.Link>
      {!email ? (
                <>
                  <Nav.Link as={NavLink} to="/signup" className="text-white">
                    Sign Up
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    Log in
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{
                        width: "45px",
                        borderRadius: "50%",
                      }}
                      src={photoURL}
                      alt=""
                    />
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0 mb-2">{email}</p>
                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
};

export default Menubar;