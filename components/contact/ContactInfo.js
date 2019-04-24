const ContactInfo = () => {
  return (
    <aside className="contact__info">
      <ul className="contact__info__ul">
        <li className="contact__info__ul__city">
          <i className="fas fa-map-marker-alt" />
          <span>Wrocław</span>
        </li>
        <li className="contact__info__ul__mail">
          <a href="mailto:rafalcieslik12321@gmail.com" target="_top">
            <i className="fas fa-envelope-open-text" />
            <span>E-mail</span>
          </a>
        </li>
        <li className="contact__info__ul__git">
          <a href="https://github.com/LexAeterna12321" target="_blank">
            <i className="fab fa-github" /> <span>Github</span>
          </a>
        </li>
        <li className="contact__info__ul__linkedin">
          <a
            href="https://www.linkedin.com/in/rafa%C5%82-cie%C5%9Blik-81038b130/"
            target="_blank"
          >
            <i className="fab fa-linkedin-in" /> <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default ContactInfo;
