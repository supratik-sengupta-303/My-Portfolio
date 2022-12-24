import React from "react";
import "./About.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function About() {
  return (
    <div className="aboutMe">
      <img
        src="https://media.licdn.com/dms/image/C5603AQH6lP75-DR_TA/profile-displayphoto-shrink_800_800/0/1642681929028?e=1677110400&v=beta&t=yQqZLiOuSOOGQTQCT_t9wUay0joAWkpv3H22GG1XddU"
        alt="Supratik Sengupta"
      />

      <div className="info">
        <p className="welcome">
          Hello everyone! <span className="welcome-msg">Welcome!</span> This is
        </p>
        <h2 className="myName">Supratik Sengupta</h2>
        <p className="description">
          I am a{" "}
          <span className="fswd">Full-Stack Web Development enthusiast</span>.
          Also, have experience working on{" "}
          <span className="aws">AWS Cloud</span>.
        </p>
        <p className="description">
          I actively look for ways to improve my technical skills and implement
          them in various projects for personal growth and also for the
          betterment of the organization.
        </p>

        <h3 className="social">You can connect with me on!</h3>
        <div className="icon-links">
          <a
            href="https://www.linkedin.com/in/supratik-sengupta-3841011b0/"
            className="icon-anchor"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/supratik-sengupta-303"
            className="icon-anchor"
          >
            <BsGithub />
          </a>
          <a href="mailto:supratik.tukai@gmail.com" className="icon-anchor">
            <GrMail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
