import React from "react";
import EdCard from "./EdCard";
import ProjectCard from "./ProjectCard";
import "./Education.css";

function Education() {
  return (
    <div>
      <h2 className="educationTitle">
        <u>Education</u>
      </h2>
      <EdCard
        img="https://scet.berkeley.edu/wp-content/uploads/8.-SRM-Logo.png"
        name="SRM Institute of Science and Technology"
        desg="Bachelor of Technology - B.Tech, Electronics and Communication Engineering"
        period="2017 - 2021"
        location="Kattankulathur, Tamil Nadu"
      />
      <EdCard
        img="https://play-lh.googleusercontent.com/shBQtw66J4Nn0_ZBd79eCxFnFtAUBjWCSr6fE-xbJK_nLbxxgFz7KjjCOh2EBx_LEIw"
        name="Maharishi Vidya Mandir"
        desg="Class 12, PCM"
        period="2015 - 2017"
        location="Jabalpur, Madhya Pradesh"
      />
      <EdCard
        img="https://upload.wikimedia.org/wikipedia/en/7/71/St._Aloysius_Senior_Secondary_School%27s_logo.jpg"
        name="St. Aloysius Sr. Sec. School"
        desg="Class 10"
        period="2015 - 2017"
        location="Jabalpur, Madhya Pradesh"
      />

      <h2 className="educationTitle">
        <u>Projects</u>
      </h2>
      <ProjectCard
        name="Home Automation using NodeMCU and Blynk Application"
        period="June 2020 - June 2020"
        img="https://media.instamojo.com/imgs/09143a3290684345a2496a1633150658.jpg"
        association="Ethical Edufabrica Pvt. Ltd"
        desc="This project enables us to control and access various appliances in our home remotely using the Blynk Application. This provides Energy Savings, prevention of unwanted bills, etc. to an individual."
      />
    </div>
  );
}

export default Education;
