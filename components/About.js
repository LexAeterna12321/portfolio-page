import React from "react";
import Nav from "./Nav";
const About = ({ siteChange }) => {
  return (
    <div className="about">
      <h1 className="about__h1">I'm a programmer</h1>
      <h2 className="about__h2">Passionate IT guy</h2>
      <button className="about__button" onClick={() => siteChange("/")}>
        Discover More
      </button>
    </div>
  );
};

export default About;
