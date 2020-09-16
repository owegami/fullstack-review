const axios = require('axios');
const config = require('../config.js');

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
      console.log('Made it into the post. Here is the response')


      })
  })
  .catch((err) => {
    console.error('Error getting github results',err);
  })
}

module.exports.getReposByUsername = getReposByUsername;