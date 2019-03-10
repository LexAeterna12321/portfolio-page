import React from "react";
import Nav from "./Nav";

const Container = props => {
  const { siteChange } = props;
  return (
    <div className="container">
      <div className="container--inner">
        <Nav siteChange={siteChange} />
        {props.children}
      </div>
    </div>
  );
};

export default Container;
