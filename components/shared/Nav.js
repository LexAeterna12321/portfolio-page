/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import PropTypes from "prop-types";
const Nav = ({ siteChange }) => {
  const [navState, setNavState] = useState({ active: false });

  const onLinkClick = site => {
    const navHamb = document.querySelector(".hamburger");
    setNavState({ active: false });
    navHamb.classList.remove("hamburger--active");
    siteChange(site);
  };
  const navToggle = () => {
    const navHamb = document.querySelector(".hamburger");
    navHamb.classList.toggle("hamburger--active");
    setNavState({ active: !navState.active });
  };

  return (
    <nav className="nav">
      <div
        className="hamburger"
        onClick={navToggle}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.keyCode !== 9 && navToggle()}
      >
        <span />
        <span />
        <span />
      </div>
      <ul className="nav__ul" style={navState.active ? style : null}>
        <li className="nav__ul__li">
          <a className="nav__ul__li__a" onClick={() => onLinkClick("/")}>
            Home
          </a>
        </li>
        <li className="nav__ul__li">
          <a className="nav__ul__li__a" onClick={() => onLinkClick("about")}>
            About Me
          </a>
        </li>
        <li className="nav__ul__li">
          <a
            className="nav__ul__li__a"
            onClick={() => onLinkClick("portfolio")}
          >
            Portfolio
          </a>
        </li>
        <li className="nav__ul__li">
          <a className="nav__ul__li__a" onClick={() => onLinkClick("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
const style = {
  opacity: "1",
  pointerEvents: "all",
  transform: "translateX(0)"
};

Nav.propTypes = {
  siteChange: PropTypes.func.isRequired
};
export default Nav;
