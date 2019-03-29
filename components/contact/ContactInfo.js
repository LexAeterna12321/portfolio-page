const ContactInfo = () => {
  return (
    <aside className="contact__info">
      <div className="contact__info__city">
        <i className="fas fa-map-marker-alt" />
        <span>Wrocław</span>
      </div>
      <div className="contact__info__mail">
        <a href="mailto:rafalcieslik12321@gmail.com" target="_blank">
          <i className="fas fa-envelope-open-text" />
          <span>E-mail</span>
        </a>
      </div>
      <div className="contact__info__git">
        <a href="https://github.com/LexAeterna12321" target="_blank">
          <i className="fab fa-github" /> <span>Github</span>
        </a>
      </div>
      <div className="contact__info__linkedin">
        <a
          href="https://www.linkedin.com/in/rafa%C5%82-cie%C5%9Blik-81038b130/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in" /> <span>LinkedIn</span>
        </a>
      </div>
    </aside>
  );
};

export default ContactInfo;
