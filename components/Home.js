import React from "react";

const Home = ({ siteChange }) => {
  return (
    <div className="home">
      <h1 className="home__h1">Hi, I'm Rafał Cieślik</h1>
      <h2 className="home__h2">Passionate IT guy</h2>
      <button className="home__button" onClick={() => siteChange("about")}>
        Discover More
      </button>
    </div>
  );
};

export default Home;
