import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    console.log(e.target.value);
    this.setState({
      term: e.target.value
    });
  }

  search() {
    // console.log('total search term:', this.state.term);
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>)
  }
}

export default Search;