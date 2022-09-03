const express = require("express");
const bodyParser = require("body-parser");
const _ = require('lodash');
const mongoose = require('mongoose');

const { homeStartingContent, aboutContent, contactContent } = require(__dirname + "/texts.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect('mongodb://127.0.0.1:27017/blogSpot');

const PORT = 3000;

const blogSchema = new mongoose.Schema({//title//content
  title: String,
  content: String
});
const Post = mongoose.model('post', blogSchema);

//'/'
app.get('/', (req, res) => {

  Post.find({}, (err, foundPost) => {
    if (!err) {
      res.render('home', { hsc: homeStartingContent, posts: foundPost });
    }
  });


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
  const post1 = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });
  post1.save((err) => {
    if (!err) {
      res.redirect('/');
    }
  });
});

//posts/:
app.get('/posts/:postId', (req, res) => {
  let requestedPostId = req.params.postId;
  Post.findOne({ _id: requestedPostId }, (err, foundPost) => {
    if (!err) {
      res.render('post', { post: foundPost });
    }
  });
})

app.listen(PORT, function () {
  console.log(`***************************${PORT}***************************`);
});
