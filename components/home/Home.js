import React from "react";
import PropTypes from 'prop-types';

const Home = ({ siteChange }) => {
  return (
    <section className="home">
      <h1 className="home__h1">Hi, I'm <strong>Rafał Cieślik</strong></h1>
      <h2 className="home__h2">Passionate IT guy</h2>
      <button className="home__button" onClick={() => siteChange("about")}>
        Discover More
      </button>
      <article className="home__socials">
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
      </article>
    </section>
  );
};
Home.propTypes={
  siteChange: PropTypes.func.isRequired
}
export default Home;
