const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const mailer = require("./mailer");

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.post(
    "https://hardcore-austin-a5c8ff.netlify.com/api/contact",
    (req, res) => {
      const { email = "", name = "", message = "" } = req.body;

      mailer({ email, name, text: message })
        .then(() => {
          console.log("success");
          res.send("success");
        })
        .catch(error => {
          console.error("failed", error);
          res.send("error");
        });
    }
  );

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log("> Read on http://localhost:3000");
  });
});
