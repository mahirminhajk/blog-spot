const express = require("express");
const bodyParser = require("body-parser");
const { homeStartingContent, aboutContent, contactContent } = require(__dirname + "/texts.js")

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = 3000;
const posts = [];

//'/'
app.get('/', (req, res) => {
  res.render('home', { hsc: homeStartingContent });
  console.log(posts);
});

//'about'
app.get('/about', (req, res) => {
  res.render('about', { ac: aboutContent });
});

//'contact'
app.get('/contact', (req, res) => {
  res.render('contact', { cc: contactContent });
});

//'compose'
app.get('/compose', (req, res) => {
  res.render('compose');
});

app.post('/compose', (req, res) => {
  let post = {
    pT: req.body.postTitle,
    pB: req.body.postBody
  };
  posts.push(post);
  res.redirect('/');
});







app.listen(PORT, function () {
  console.log(`***************************${PORT}***************************`);
});
