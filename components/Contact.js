import { useState } from "react";
import Form from "./Form";
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

  return (
    <div className="contact">
      <h1 className="contact__h1">Contact Me</h1>
      <Form
        messageData={{ ...state }}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Contact;
