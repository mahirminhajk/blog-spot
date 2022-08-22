const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = 3000














app.listen(PORT, function () {
  console.log(`***************************${PORT}***************************`);
});
