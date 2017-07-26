import React, { Component } from 'react';


class PlayListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  render() {
    // console.log('item Props', this.props);
    let outArr = this.props.songs.map((song) => {
      return (
        <li key={song._id}>
          <div className="tile song">
            <form className="userInfo">
              <div>
                <label> User Name: </label>
                <input type="text" value={song.userName} readOnly />
              </div>

              <div>
                <label>Song Artist: </label>
                <input type="text" value={song.songArtist} readOnly />
              </div>

              <div>
                <label> Song Title: </label>
                <input type="text" value={song.songTitle} readOnly />
              </div>
            </form>

            <label> Notes: </label>
            <textarea className="notes" value={song.songNotes} readOnly />
          </div>
        </li>
      )
    })
    return (
      <div className="songs">
        <ul className="list">
          {outArr}
        </ul>
      </div>
    )
  }
}

export default PlayListItem;
