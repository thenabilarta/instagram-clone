const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());

app.use("/api/users", require("./routes/users"));

app.post("/token", (req, res) => {
  console.log("iht");
  const email = req.body.email;
  const password = req.body.password;

  if (email === "admin@ltd.com" && password === "123456") {
    var token = jwt.sign(
      { email: "admin@ltd.com", role: "admin", loggedIn: true },
      "shhhhh"
    );
    res.cookie("token", token);
    res.send({
      loggedIn: true,
      role: "admin",
      token,
    });
    return;
  }

  if (email === "user@ltd.com" && password === "123456") {
    var token = jwt.sign(
      { email: "user@ltd.com", role: "user", loggedIn: true },
      "shhhhh"
    );
    res.cookie("token", token);
    res.send({
      loggedIn: true,
      role: "user",
      token,
    });
    return;
  } else {
    return res.send({
      loggedIn: false,
    });
  }
});

app.get("/api/user", (req, res) => {
  const _token = req.get("authorization");
  const token = _token.split(" ")[1];

  jwt.verify(token, "shhhhh", function (err, decode) {
    if (!decode) {
      return res.json({
        loggedIn: false,
        error: true,
      });
    } else {
      console.log("LOGIN");
    }
  });
});

app.listen(8080, () => {
  console.log("listening");
});
