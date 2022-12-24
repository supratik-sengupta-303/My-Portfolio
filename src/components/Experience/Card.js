import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="logo" />
      <div className="details">
        <h3 className="cardName">{props.name}</h3>
        <h4 className="desg">{props.desg}</h4>
        <p className="duration">
          <div className="inline">{props.period}</div> ·{" "}
          <div className="inline">{props.duration}</div>
        </p>
        <p className="location">{props.location}</p>
        <p className="desc">{props.desc}</p>
      </div>
    </div>
  );
}

export default Card;
