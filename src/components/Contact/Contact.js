import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "./Contact.css";
import { setName, setMail } from "./../../redux/slices/infoSlice";
import { useNavigate } from "react-router-dom";

function Contact() {
  const inputNameRef = useRef(null);
  const inputMailRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(setName(inputNameRef.current.value));
    dispatch(setMail(inputMailRef.current.value));
    navigate("/confirmation");
  }

  return (
    <form className="myForm" onSubmit={handleSubmit}>
      <p className="infoForm">
        Fill the below details! and I will get back to you shortly.
      </p>
      <div className="inputField">
        <p className="userName">Name</p>
        <input
          type="text"
          placeholder="Your name..."
          className="userInput"
          ref={inputNameRef}
        />
      </div>
      <div className="inputField">
        <p className="userEmail">Email</p>
        <input
          type="email"
          placeholder="Your email..."
          className="userInput"
          ref={inputMailRef}
        />
      </div>
      <br />
      <input type="submit" className="userSubmitBtn" onClick={handleSubmit} />
    </form>
  );
}

export default Contact;
