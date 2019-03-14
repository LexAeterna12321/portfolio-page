import { useState } from "react";
import ContactInfo from "./ContactInfo";
const initialState = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [state, setState] = useState(initialState);
  const [validationStatus, setValidationStatus] = useState("");

  const handleInputChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleValidation = e => {
    const invalidItem = e.target.placeholder;
    if (e.target.value.trim() === "") {
      setValidationStatus(`Pole ${invalidItem} nie może być puste.`);
    } else {
      setValidationStatus("");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const fieldsValues = Object.values(state);
    const validationItems = fieldsValues.filter(field => field === "");
    if (validationItems.length !== 0) {
      setValidationStatus("Wszystkie pola muszą być wypełnione.");
    } else {
      setState({ ...state, ...initialState });
    }
  };

  const { name, email, subject, message } = state;
  return (
    <div className="contact">
      <h1 className="contact__h1">Contact Me</h1>
      <ContactInfo />
      <form className="contact__form" onSubmit={e => handleSubmit(e)}>
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
          placeholder="subject"
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
