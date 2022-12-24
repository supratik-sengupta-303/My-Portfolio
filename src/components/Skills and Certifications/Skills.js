import React from "react";
import CertCard from "./CertCard";
import "./Skills.css";

function Skills() {
  return (
    <div>
      <h3 className="skillsTitle">
        <u>Technical Skills</u>
      </h3>
      <ul className="techSkills">
        <li className="skill">ReactJS</li>
        <li className="skill">Redux</li>
        <li className="skill">JavaScript</li>
        <li className="skill">HTML</li>
        <li className="skill">Cascading Style Sheets (CSS)</li>
        <li className="skill">Amazon Web Services (AWS)</li>
        <li className="skill">Java</li>
        <li className="skill">C language</li>
      </ul>

      <h3 className="skillsTitle">
        <u>Certifications</u>
      </h3>
      <CertCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
        name="AWS Certified Cloud Practitioner"
        issuedBy="Amazon Web Services (AWS)"
        issueDate="April 2022"
        expDate="Dec 2025"
        cred="9566LMZDG1E41J38"
      />
      <CertCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
        name="AWS Certified Developer - Associate"
        issuedBy="Amazon Web Services (AWS)"
        issueDate="Dec 2022"
        expDate="Dec 2025"
        cred="ZL18XV9KYMFE163H"
      />
    </div>
  );
}

export default Skills;
