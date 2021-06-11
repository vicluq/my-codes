const express = require("express");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const bodyParser = require("body-parser");

const app = express();

const server = livereload.createServer({
  exts: ["js", "css", "html"],
  debug: true,
});

server.watch("../css");

// Middleware to allow conection between livereload and express
app.use(connectLiveReload({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [];

app.post("/user", (req, res) => {
  console.log(req);
  const user = { ...req.body };
  if (user.password.length < 6 || user.email.includes("hotmail")) {
    res.status(400).send({
      error: "your password is less than 6 char, or your client is hotmail",
    });
  } else {
    users.push(user);
    console.log(users);
    res.status(200).send("Everything went successfuly!");
  }
});

app.use("/", express.static(__dirname + "\\..\\css")); //serving the static files

app.listen(3003, () => {
  console.log("Server Listening To Port 3003");
});
