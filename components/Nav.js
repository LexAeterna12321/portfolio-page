import React from "react";
import Link from "next/link";

const Nav = ({ siteChange }) => {
  return (
    <nav className="nav">
      <div className="hamburger">
        <span />
        <span />
        <span />
      </div>
      <ul className="nav__ul">
        <li>
          <a onClick={() => siteChange("/")}>Home</a>
        </li>
        <li>
          <a onClick={() => siteChange("about")}>About Me</a>
        </li>
        <li>
          <Link href="./portfolio">
            <a> Portfolio</a>
          </Link>
        </li>
        <li>
          <Link href="./contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
