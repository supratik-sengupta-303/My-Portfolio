import React from "react";
import "./CertCard.css";

function CertCard(props) {
  return (
    <div className="CertCard">
      <img src={props.img} alt="logo" />
      <div className="certDetails">
        <h3 className="certName">{props.name}</h3>
        <h4 className="certIssuer">{props.issuedBy}</h4>
        <p className="durationCert">
          Issued {props.issueDate} · Expired {props.expDate}{" "}
        </p>
        <p className="cred">Credential ID {props.cred}</p>
      </div>
    </div>
  );
}

export default CertCard;
