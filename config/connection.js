const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "instagram_clone",
});

connection.connect();

module.exports = connection;
