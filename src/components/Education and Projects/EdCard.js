import React from "react";
import "./EdCard.css";

function EdCard(props) {
  return (
    <div className="EdCard">
      <img src={props.img} alt="logo" />
      <div className="details1">
        <h3 className="cardName1">{props.name}</h3>
        <h4 className="desg1">{props.desg}</h4>
        <p className="period1">{props.period}</p>
        <p className="location1">{props.location}</p>
      </div>
    </div>
  );
}

export default EdCard;
