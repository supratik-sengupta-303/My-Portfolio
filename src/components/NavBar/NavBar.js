import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-buttons">
      <Link to="/" className="link-nav">
        <button className="nav-btn">About</button>
      </Link>

      <Link to="/experience" className="link-nav">
        <button className="nav-btn">Experience</button>
      </Link>

      <Link to="/education" className="link-nav">
        <button className="nav-btn">Education and Projects </button>
      </Link>

      <Link to="/skills" className="link-nav">
        <button className="nav-btn">Skills and Certifications</button>
      </Link>

      <Link to="contact" className="link-nav">
        <button className="nav-btn">Contact Me</button>
      </Link>
    </div>
  );
}

export default NavBar;
