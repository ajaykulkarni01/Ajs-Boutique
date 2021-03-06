import React from "react";
import CategoryMenu from "../CategoryMenu";
// import Header from "../Header";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from 'react-bootstrap';

function NavHeader() {

  return (
    <Navbar className="navbar customNav" collapseOnSelect expand="lg" >
    <Container>
    
    <Navbar.Brand href="/">AJ's - Boutique</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="justify-content-center customNavLinks" >
      <CategoryMenu />
         <Nav.Link href="/about">About us</Nav.Link>
         <Nav.Link href="/contact">Contact us</Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
    </Container>
    
  </Navbar>
  
  );
}

export default NavHeader;
