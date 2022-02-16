import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
          <div>
            <Link className="btn btn-lg btn-light m-2" to="/orderHistory">Order History</Link>
          </div>
          <div className="btn btn-lg btn-light m-2">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <Link className="btn btn-lg btn-light m-2" to="/signup">Signup</Link>
          </div>
          <div>
            <Link className="btn btn-lg btn-light m-2" to="/login">Login</Link>
          </div>
        </div>
      );
    }
  }

  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
              <h1 className="m-0">Project Name</h1>
            </Link>
            <p className="m-0">This is a sub-title</p>
        </div>
        <nav>
          {showNavigation()}
        </nav>
      </div>
    </header>
  );
}

export default Nav;
