import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
// import TopRepoList from './components/TopForked.jsx'; // Refactored this into a better format, but left this in as a reminder. Shout out to, Quinn, for being the best!
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRepos: [],
      forkedRepos: [],
      forked: false
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    //make an ajax post request to the server with query of username
    //wait for response.
    // plug response into this.state.userRepos

    //axios
    axios({
      url: '/repos',
      method: 'POST',
      data: { username: term }
    })
    .then((res) => {
      console.log(res);
    })

  }

  getMostForked () {
    //set state of forked
    // make an ajax get request to server
    //await results from server
    //plug results into the forked watched repos

  }

  render () {
    return (
      <div>
        <h1>Welcome to Github Fetcher!</h1>
        <h2>Please type in a github username below to pull up the their repos:</h2>
        <Search onSearch={this.search.bind(this)}/>
        <button onClick={this.getMostForked.bind(this)}>Click to see the current most forked repos on github</button>
        {/* <TopRepoList top={this.state.forkedRepos} forked={this.state.forked}/>  //refactored out  */}
        <RepoList repos={this.state.forked ? this.state.forkedRepos : this.state.userRepos}/>
      </div>
    )

  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));