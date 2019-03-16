const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "OAuth2",
    user: "lexaeterna12321@gmailcom",
    refreshToken: "",
    accessToken: "",
    clientId: "",
    clientSecret: ""
  }
});

const send = ({ email, name, message }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const msg = {
    from,
    to: "lexaeterna12321@gmail.com",
    subject: `New message from ${from}`,
    message,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(msg, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

module.exports = send;
