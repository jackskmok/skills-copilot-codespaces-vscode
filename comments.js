// Create web server
const express = require('express');
const app = express();

// Create comments array
const comments = [
  {username: 'Todd', comment: 'lol so funny'},
  {username: 'Skyler', comment: 'I like turtles'},
  {username: 'Sk8erBoi', comment: 'Plz delete your account, Todd'}
];

// Create GET route for comments
app.get('/comments', function(req, res) {
  res.send(comments);
});

// Start server
app.listen(3000, function() {
  console.log('Server is listening on port 3000');
});

// Path: index.js
// Import axios
const axios = require('axios');

// Make a GET request to the comments service
axios.get('http://localhost:3000/comments')
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.log(error);
  });

// Run index.js in terminal
// Output: [ { username: 'Todd', comment: 'lol so funny' },
//   { username: 'Skyler', comment: 'I like turtles' },
//   { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' } ]