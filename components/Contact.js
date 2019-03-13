import { useState } from "react";
import ContactInfo from "./ContactInfo";
const initialState = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [state, setState] = useState(initialState);

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
    setState({ ...state, ...initialState });
    console.log(state);
  };

  const { name, email, subject, message } = state;
  return (
    <div className="contact">
      <h1 className="contact__h1">Contact Me</h1>
      <ContactInfo />
      <form className="contact__form" onSubmit={e => handleSubmit(e)}>
        <input
          onChange={e => handleChange(e)}
          type="text"
          name="name"
          placeholder="Name"
          value={name}
        />
        <input
          onChange={e => handleChange(e)}
          type="email"
          name="email"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={e => handleChange(e)}
          type="text"
          name="subject"
          placeholder="subject"
          value={subject}
        />
        <textarea
          onChange={e => handleChange(e)}
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          value={message}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
