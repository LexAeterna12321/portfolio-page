const Form = ({
  name,
  email,
  subject,
  message,
  handleSubmit,
  handleChange
}) => {
  return (
    <form onSubmit={e => handleSubmit(e)}>
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
  );
};

export default Form;
