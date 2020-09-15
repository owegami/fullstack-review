import React from 'react';
import RepoEntry from './Repo.jsx';

const RepoList = (props) => {
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      {
      props.repos.map((repo) =>{
         return <RepoEntry repo={repo}/>;
      })
      }
    </div>
  )
}

export default RepoList;