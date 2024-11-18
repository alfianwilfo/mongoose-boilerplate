const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/users", require("./controllers/user").store);

app.use(require("./services/errorHandler"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
