/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
      <header>
        <div className="logo"><Link to="/">Kryss Na</Link></div>
        <div className="center-component">
          <ul>
            <li>
              <Link to="/contact">contact</Link>
             </li> <li> <Link to="/about">about</Link></li>
              <li><Link to="/service">service</Link>
            </li>
          </ul>
        </div>
        <div className="auth-component">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {/* <li><a href="/logout"></a>Logout</li> */}
          </ul>
        </div>
      </header>
    </nav>
  );
};
