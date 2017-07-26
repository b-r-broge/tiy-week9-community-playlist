import React, { Component } from 'react';

class PlayListForm extends Component {

  constructor(props) {
    super(props);

    this.addToList = this.addToList.bind(this);

    this.state = {};
  }

  //In your PlayListForm component you should have a addToList function that happens
  //when the htmlForm is submitted.
  //This expression or method (dependin on the syntax you choose) will be comparable to this:

  addToList = (e) => {
      e.preventDefault();
      this.setState({userName: e.target.value, songTitle: e.target.value, songArtist: e.target.value, songNotes: e.target.value});
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    }
    ).then(response => {
      console.log(response, "yay");

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
  }

  render() {
    return (
      <form className="songInput" onSubmit={this.addToList}>
        <label htmlFor="username">User Name:</label>
        <input type="text" name="username" id="username" value="" placeholder="Name or User Name"> </input>

        <label htmlFor="artist">Artist/Band:</label>
        <input type="text" name="artist" id="artist" value="" placeholder="Artist or Band Name" />

        <label htmlFor="song-title">Song Title:</label>
        <input type="text" name="song-title" id="song-title" value="" placeholder="Song Title" />

        <label htmlFor="song-notes">Notes about the Song:</label>
        <textarea name="song-notes" id="song-notes" rows="3" cols="40" />

        <button type="submit" name="submit">Submit</button>
      </form>

    )
  }
}

export default PlayListForm;
