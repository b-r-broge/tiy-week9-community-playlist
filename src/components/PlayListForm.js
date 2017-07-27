import React, { Component } from 'react';

class PlayListForm extends Component {

  constructor(props) {
    super(props);

    this.addToList = this.addToList.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      userName: "",
      songTitle: "",
      songArtist: "",
      songNotes: ""
    };
  }

  //In your PlayListForm component you should have a addToList function that happens
  //when the htmlForm is submitted.
  //This expression or method (dependin on the syntax you choose) will be comparable to this:

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addToList = (e) => {
    e.preventDefault();
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
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
        <input type="text" name="userName" id="username" value={this.state.userName} onChange={this.handleChange} placeholder="Name or User Name" />

        <label htmlFor="artist">Artist/Band:</label>
        <input type="text" name="songArtist" id="artist" value={this.state.songArtist} onChange={this.handleChange} placeholder="Artist or Band Name" />

        <label htmlFor="song-title">Song Title:</label>
        <input type="text" name="songTitle" id="song-title" value={this.state.songTitle} onChange={this.handleChange} placeholder="Song Title" />

        <label htmlFor="song-notes">Notes about the Song:</label>
        <textarea name="songNotes" id="song-notes" value={this.state.songNotes} onChange={this.handleChange} rows="3" cols="40" />

        <button type="submit" name="submit">Submit</button>
      </form>

    )
  }
}

export default PlayListForm;
