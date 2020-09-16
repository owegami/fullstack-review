const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fetcher', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {

})

let repoSchema = new mongoose.Schema({
  repoId: {type: Number, unique: true},
  repoName: String,
  userName: String,
  forks: Number,
  url: String,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoId, repoName, userName, forks, url) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log('made it to db save mathod:', repoId, repoName, userName, forks, url);

  let newRepoEntry = new Repo({
    repoId: repoId,
    repoName: repoName,
    userName: userName,
    forks: forks,
    url: url
  });

    newRepoEntry.save(function (err, newRepoEntry) {
    if (err) {
      return handleError(err);
    } else {
      console.log(`Success! We've saved ${newRepoEntry.repoName} `);
    }
    })
  }

  module.exports.save = save;


  //Alts for creation
      // Repo.create({
      //   repoId: repoId,
      //   repoName: repoName,
      //   userName: userName,
      //   forks: forks,
      //   url: url
      // }, function (err, small) {
      //   if (err) {
      //     return handleError(err);
      //   } else {
      //     console.log(`Success at Repo.create!`);
      //   }
      // })

      // Repo.insertMany([{
      //   repoId: repoId,
      //   repoName: repoName,
      //   userName: userName,
      //   forks: forks,
      //   url: url
      // }], function (err) {
      //   if (err) {
      //     return handleError(err);
      //   } else {
      //     console.log(`Success at Repo.insertMany!`);
      //   }
      // })