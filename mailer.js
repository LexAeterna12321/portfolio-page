const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const { SENDGRID_API_KEY } = process.env;
const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: SENDGRID_API_KEY
    }
  })
);

const send = ({ email, text, name }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`;
  const message = {
    from,
    to: "lexaeterna12321@gmail.com",
    subject: `New message from ${from}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};
module.exports = send;
