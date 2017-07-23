import React, { Component } from 'react';
import playItem from './PlayListItem';


// //copy and paste into componentDidMount in your PlayList component.
// fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
//       return results.json();
//     }).then(data => {
//       this.setState({songs: data});
//       console.log("state", this.state.songs);
//     })


// //Also in your PlayList component you should have a function that manually updates
// //the playlist when a user presses a button. Use the following "fetchData" function
// //to manually update your playlist.
// fetchData = (e) => {
//     e.preventDefault();
//     fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
//       return results.json();
//     }).then(data => {
//       this.setState({songs: data});
//     })
//   }
