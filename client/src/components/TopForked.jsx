import React from 'react';
import RepoEntry from './Repo.jsx';
import App from './../index.jsx';

const TopRepoList = (props) => {
  console.log('props.forked', props.forked);
  if (props.forked) {
    return(
      <div className='MostForkedRepos'>
        <h4>Top Forked Repositories From Users You Have Searched:</h4>
        {
          props.top.map( (repo) => {
            return <RepoEntry repo={repo}/>;
          })
        }
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default TopRepoList;