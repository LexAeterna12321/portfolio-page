import React from "react";
import Nav from "./Nav";

const Container = props => {
  return (
    <div className="container">
      <div className="container--inner">
        <Nav />
        {props.children}
      </div>
    </div>
  );
};

export default Container;
