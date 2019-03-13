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
          <a onClick={() => siteChange("portfolio")}>Portfolio</a>
        </li>
        <li>
          <a onClick={() => siteChange("contact")}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
