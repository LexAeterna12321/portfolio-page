import React from "react";

const Home = ({ siteChange }) => {
  return (
    <div className="home">
      <h1 className="home__h1">Hi, I'm Rafał Cieślik</h1>
      <h2 className="home__h2">Passionate IT guy</h2>
      <button className="home__button" onClick={() => siteChange("about")}>
        Discover More
      </button>
      <div className="home__socials">
        <a
          className="home__socials__a"
          href="https://github.com/LexAeterna12321"
          target="_blank"
        >
          <i className="fab fa-github-square" />
        </a>
        <a
          className="home__socials__a"
          href="https://www.linkedin.com/in/rafa%C5%82-cie%C5%9Blik-81038b130/"
          target="_blank"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Home;
