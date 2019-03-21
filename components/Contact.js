import { useState } from "react";
import ContactInfo from "./ContactInfo";
import firebase from "../fbConfig";
const initialState = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [state, setState] = useState(initialState);
  const [validationStatus, setValidationStatus] = useState("");

  const writeContactMessage = formData => {
    firebase
      .database()
      .ref("contact")
      .push(formData);
  };

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
      writeContactMessage(state);
      setState({ ...state, ...initialState });
      setValidationStatus(
        `Thank you for your message. I hope we keep in touch. ;)`
      );
    }
  };

  const { name, email, subject, message } = state;
  return (
    <div className="contact">
      <h1 className="contact__h1">Contact Me</h1>
      <ContactInfo />
      <form
        name="contact"
        method="POST"
        className="contact__form"
        onSubmit={e => handleSubmit(e)}
      >
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
