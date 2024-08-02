import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "../App.css";
import logo from "../assets/Images/logo1.jpg";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <img src={logo} alt="logo" />
        <div className="navbar-brand">__Tulasi's Portfolio__</div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse desctopmenu" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <NavLink to="/" className="nav-link desctopItems">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link desctopItems">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/skills" className="nav-link desctopItems">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link desctopItems">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
