const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const connection = require("../config/connection");

const saltRounds = 10;

const { auth } = require("../middleware/auth");

router.post("/register", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  let password = req.body.password;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(password, salt, function (err, hash) {
      if (err) return next(err);
      const sqlQuery = `INSERT INTO users (id, username, email, password) VALUES ('', '${username}', '${email}', '${hash}')`;

      connection.query(sqlQuery, (err, data) => {
        console.log(data);
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
    });
  });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  let password = req.body.password;

  const sqlQuery = `SELECT * FROM users WHERE username = '${username}'`;

  connection.query(sqlQuery, (err, data) => {
    console.log(data);
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

// router.get("/", auth, (req, res) => {
//   res.send("user");
// });

module.exports = router;
