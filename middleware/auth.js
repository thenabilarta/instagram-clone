const jwt = require("jsonwebtoken");

let auth = (req, res, next) => {
  const _token = req.get("authorization");
  const token = _token.split(" ")[1];

  jwt.verify(token, "shhhhh", function (err, decode) {
    if (!decode) {
      return res.json({
        loggedIn: false,
        error: true,
      });
    }

    req.token = token;
    next();
  });
};

module.exports = { auth };
