import React, { Component } from 'react';
import PlayListItem from './PlayListItem';

class PlayList extends Component {
  constructor(props) {
    super(props);

    // bind fetchData to this
    this.fetchData = this.fetchData.bind(this);
    this.makeFetch = this.makeFetch.bind(this);

    this.state = {
      songs: []
    }
  }

  makeFetch = () => {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState({songs: data});
    })
  }

  componentDidMount() {
    return this.makeFetch()
  }

  fetchData = (e) => {
    e.preventDefault();
    return this.makeFetch()
  }


  render() {
    return (
      <div className="playlist">
        <button onClick={this.fetchData}> Refresh Playlist </button>
        <PlayListItem songs={this.state.songs} />
      </div>
    )
  }
}


export default PlayList;
