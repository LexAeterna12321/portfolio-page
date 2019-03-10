import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__h1">I'm a programmer</h1>
      <ul className="about__basic-info">
        <li>
          Name: <span>John Doe</span>
        </li>
        <li>
          Job: <span>Freelancer</span>
        </li>
        <li>
          Age: <span>30 Years</span>
        </li>
        <li>
          Residence:<span>Wrocław</span>
        </li>
        <li>
          Dream Job: <span>Tech Job</span>
        </li>
      </ul>
      <div className="about__description">
        Hi There, I'm self taught web developer. I'm refactoring myself from
        scratch. I've fallen in love with Front end world, especially javascript
        teamed up with react js framework.
      </div>
      <h1 className="about__h1">My skills</h1>
    </div>
  );
};

export default About;
