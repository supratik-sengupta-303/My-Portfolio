import React from "react";
import "./CardPromotion.css";

function CardPromotion(props) {
  return (
    <div className="cardPromotion">
      <img src={props.img} alt="logo" />
      <div className="details1">
        <h3 className="cardName1">{props.name}</h3>
        <ul>
          <li>
            <h4 className="desg1">{props.desg1}</h4>
            <p className="duration1">
              {props.period2} · {props.duration2}
            </p>
          </li>
          <li>
            <h4 className="desg1">{props.desg2}</h4>
            <p className="duration1">
              {props.period1} · {props.duration1}
            </p>
          </li>
        </ul>
        <p className="location1">{props.location}</p>
        <p className="desc1">{props.desc}</p>
      </div>
    </div>
  );
}

export default CardPromotion;
