import React from "react";
import { useSelector } from "react-redux";
import { Link, Routes, Route } from "react-router-dom";
import "./Confirmation.css";

function Confirmation() {
  const name = useSelector((state) => state.infoReducer.name);
  const mail = useSelector((state) => state.infoReducer.mail);

  return (
    <div className="fullBox">
      <div className="confirmBox">
        <h4 className="confQues">
          Please check your details before submitting.
        </h4>
        <p className="confDetails">
          {" "}
          <b>Name:</b> {name}{" "}
        </p>
        <p className="confDetails">
          <b> Mail:</b> {mail}{" "}
        </p>
      </div>
      <p className="confSubmit">Are you sure, you want to submit?</p>
      <ul className="flexUl">
        <li className="liClass">
          <Link to="/thankyou">
            <button className="confBtn">Yes</button>
          </Link>
        </li>
        <li className="liClass">
          <Link to="/contact">
            <button className="confBtn">No</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Confirmation;
