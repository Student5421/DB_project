const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "manager",
  password: "test1234",
  database: "food",
});

module.exports = connection;
