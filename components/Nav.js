const Nav = ({ siteChange }) => {
  return (
    <nav className="nav">
      <div className="hamburger">
        <span />
        <span />
        <span />
      </div>
      <ul className="nav__ul">
        <li className="nav__ul__li">
          <a className="nav__ul__li__a" onClick={() => siteChange("/")}>
            Home
          </a>
        </li>
        <li className="nav__ul__li">
          <a className="nav__ul__li__a" onClick={() => siteChange("about")}>
            About Me
          </a>
        </li>
        <li className="nav__ul__li">
          <a className="nav__ul__li__a" onClick={() => siteChange("portfolio")}>
            Portfolio
          </a>
        </li>
        <li className="nav__ul__li">
          <a className="nav__ul__li__a" onClick={() => siteChange("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
