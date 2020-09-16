const axios = require('axios');
const config = require('../config.js');
const repoDB = require('./../database');

let getReposByUsername = (userName) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL

  let options = {
    url: `https://api.github.com/users/${userName.username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  axios.get(options.url)
  .then((res) => {
      console.log('Made it into the post.', res.data.length);

      for (var i = 0; i < res.data.length; i++) {
        repoDB.save(res.data[i].id, res.data[i].name, res.data[i].owner.login, res.data[i].forks_count, res.data[i].html_url)
      }

  })
  .catch((err) => {
    console.error('Error getting github results',err);
  })
}

module.exports.getReposByUsername = getReposByUsername;