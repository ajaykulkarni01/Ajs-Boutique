import React from "react";
import Auth from "../../utils/auth";

import { Navbar, Container, Nav } from 'react-bootstrap';

function NavHeader() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav>
        <Nav.Link href="/orderHistory">Order History</Nav.Link>
        <Nav.Link onClick={() => Auth.logout()} href="/" >Logout</Nav.Link>
      </Nav>
      
      );
    } else {
      return (
        <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
      </Nav>
      );
    }
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">MERN-comm</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/">About</Nav.Link>
      </Nav>
      <Nav>
        {showNavigation()}
      </Nav>
    </Navbar.Collapse>
    </Container>

  </Navbar>
  );
}

export default NavHeader;
