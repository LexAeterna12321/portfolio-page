import React from "react";
import Nav from "./Nav";
const Home = () => {
  return (
    <div className="home">
      <Nav />
      <h1 className="home__h1">Hi, I'm Rafał Cieślik</h1>
      <h2 className="home__h2">Passionate IT guy</h2>
      <button className="home__button">Discover More</button>
      <div className="home--inner" />
    </div>
  );
};

export default Home;
