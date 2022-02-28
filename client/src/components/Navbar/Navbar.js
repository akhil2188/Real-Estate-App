import React from "react";
import { NavLink } from "react-router-dom";

const Navbar =(sticky) => {
  return (
    <div className="navigation">
      <nav className={sticky ? "navbar navbar-expand navbar-dark navbar-sticky" : "navbar navbar-expand navbar-dark"}>
        <div className="container">
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Sales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rental">
                  Rental
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/team">
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;