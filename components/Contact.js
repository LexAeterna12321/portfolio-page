import { useState } from "react";
import ContactInfo from "./ContactInfo";
const initialState = { name: "", email: "", subject: "", message: "" };
import "isomorphic-fetch";

const Contact = () => {
  const [state, setState] = useState(initialState);
  const [validationStatus, setValidationStatus] = useState("");

  const handleInputChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleValidation = e => {
    const invalidItem = e.target.placeholder;
    if (e.target.value.trim() === "") {
      setValidationStatus(`Field ${invalidItem} cannot be empty.`);
    } else {
      setValidationStatus("");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const fieldsValues = Object.values(state);
    const validationItems = fieldsValues.filter(field => field === "");
    if (validationItems.length !== 0) {
      setValidationStatus("All fields must be filled.");
    } else {
      setState({ ...state, ...initialState });

      setValidationStatus(
        `Thank you for your message. I hope we keep in touch. ;)`
      );
      // fetch("/api/contact", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json, text/plain, */*",
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(state)
      // }).then(res => {
      //   res.status === 200 ? setState({ ...state, submitted: true }) : "";
      // });
    }
  };

  const { name, email, subject, message } = state;
  return (
    <div className="contact">
      <h1 className="contact__h1">Contact Me</h1>
      <ContactInfo />
      <form
        action="mail.php"
        name="contact"
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        className="contact__form"
        onSubmit={e => handleSubmit(e)}
      >
        <input name="bot-field" className="contact__form__input--hidden" />
        <input
          onChange={e => handleInputChange(e)}
          onBlur={e => handleValidation(e)}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
        />
        <input
          onChange={e => handleInputChange(e)}
          onBlur={e => handleValidation(e)}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={e => handleInputChange(e)}
          onBlur={e => handleValidation(e)}
          type="text"
          name="subject"
          placeholder="Subject"
          value={subject}
        />
        <textarea
          onChange={e => handleInputChange(e)}
          onBlur={e => handleValidation(e)}
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          value={message}
        />
        {validationStatus ? (
          <p className="contact__form__validationStatus">{validationStatus}</p>
        ) : (
          <p />
        )}
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
