const express = require("express");
const bodyParser = require("body-parser");
const { homeStartingContent, aboutContent, contactContent } = require(__dirname + "/texts.js")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = 3000

app.get('/', (req, res) => {
  res.render('home', { hsc: homeStartingContent });
})












app.listen(PORT, function () {
  console.log(`***************************${PORT}***************************`);
});
