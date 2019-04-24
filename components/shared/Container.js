import React from "react";
import Nav from "./Nav";
import Loader from "./Loader";
const Container = props => {
  const { siteChange, loader } = props;
  return (
    <div className="container">
      <div className="container--inner">
        {loader ? (
          <Loader />
        ) : (
          <React.Fragment>
            <Nav siteChange={siteChange} />
            {props.children}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Container;
