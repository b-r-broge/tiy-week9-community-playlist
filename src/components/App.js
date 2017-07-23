import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import navbar from './NavBar';
import playlist from './PlayList';
import playForm from './PlayListForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <navbar />
        <playlist />
        <playForm />
      </div>
    );
  }
}

export default App;
