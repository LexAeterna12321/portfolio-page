import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="hamburger">
        <span />
        <span />
        <span />
      </div>
      <ul className="nav__ul">
        <li>
          <Link href="./home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="./about">
            <a>About Me</a>
          </Link>
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
