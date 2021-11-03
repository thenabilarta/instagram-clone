const jwt = require("jsonwebtoken");

let auth = (req, res, next) => {
  const _token = req.get("authorization");
  const token = _token.split(" ")[1];

  jwt.verify(token, "shhhhh", function (err, decode) {
    if (!decode) {
      return res.json({
        isLoggedIn: false,
        role: "none",
      });
    }

    req.token = token;
    req.decode = decode;
    next();
  });
};

module.exports = { auth };
