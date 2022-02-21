import React from "react";
import Auth from "../../utils/auth";

// import CategoryMenu from "../CategoryMenu"

import { Nav } from 'react-bootstrap';
import Cart from "../Cart";

function Header() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav className="justify-content-end ">
        <Nav.Link href="/orderHistory">Order History</Nav.Link>
        <Nav.Link onClick={() => Auth.logout()} href="/" >Logout</Nav.Link>
        <Cart />
      </Nav>
      
      );
    } else {
      return (
        <Nav className="justify-content-end ">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
        <Cart />
      </Nav>
      );
    }
  }

  return (
    <Nav className="justify-content-end customTopNavCss">
      {showNavigation()}
    </Nav>

    

  );
}

export default Header;
