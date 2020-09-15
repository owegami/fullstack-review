const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {

})

let repoSchema = mongoose.Schema({
  repoId: Number,
  repoName: String,
  userName: String,
  forks: Number,
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoId, repoName, userName, forks, url) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let newRepoEntry = new Repo({
    repoId: repoId,
    repoName: repoName,
    userName: userName,
    forks: forks,
    url: url
  });

  newRepoEntry.save(function (err, newRepoEntry) {
    if (err) {
      return console.error(err);
    } else {
      console.log(`Success! We've logged ${newRepoEntry.repoName} into our database!`);
    }
  })
}

module.exports.save = save;