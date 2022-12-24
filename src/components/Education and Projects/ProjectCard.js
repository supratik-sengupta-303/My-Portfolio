import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="projectCard">
      <h3 className="projectName">{props.name}</h3>
      <p className="projectPeriod">{props.period}</p>
      <div className="associated">
        <img src={props.img} alt="logo" />
        <p className="associatedWith">Associated with {props.association}</p>
      </div>
      <p className="projectDesc">{props.desc}</p>
    </div>
  );
}

export default ProjectCard;
