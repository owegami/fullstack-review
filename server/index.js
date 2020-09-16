const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const repoDB = require('./../database');
const githubHelper = require('./../helpers/github.js');
// const headers = require('./cors');


let app = express();


app.use(express.static(__dirname + '/../client/dist'));

// app.use (bodyparser) // might have to download body parser for express // json is the express original

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  console.log(`Recieved ${req.method} and the data sent was`, req.body);

  var results = githubHelper.getReposByUsername(req.body);

  // res.set(headers);
  res.send('Sent to githubhandler');
});


app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos from the database
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

