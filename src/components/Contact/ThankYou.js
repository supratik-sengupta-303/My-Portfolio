import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

function ThankYou() {
  return (
    <div className="thanksBox">
      <p className="thanksMsg">Thank you for submitting your response.</p>
      <Link to="/">
        <button className="goToAbout">Go to About</button>
      </Link>
    </div>
  );
}

export default ThankYou;
