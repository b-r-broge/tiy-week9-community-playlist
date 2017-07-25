import React, { Component } from 'react';


class PlayListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tileArray: []
    }
  }

  render() {
    console.log('item Props', this.props);
    let outArr = this.props.songs.map((song) => {
      return (
        <div className="tile song" key={song._id}>
          <p>Song Artist: {song.songArtist}</p>
          <p>Song Notes: {song.songNotes}</p>
          <p>Song Title: {song.songTitle}</p>
          <p>User Name: {song.userName}</p>
        </div>
      )
    })
    return (
      <div className="songs">
        {outArr}
      </div>
    )
  }
}

export default PlayListItem;
