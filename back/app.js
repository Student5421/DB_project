const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;

const api = require("./api.js");
const testdb = require("./testdb.js");

//사용자가 localhost:3000/api 에 접속시 api를 불러오는 것.
app.use("/api", api);
app.use("/testdb", testdb);
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`${PORT}` + " port open");
});
