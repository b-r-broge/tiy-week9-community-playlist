import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';
import NavBar from './NavBar';
import PlayList from './PlayList';
import PlayListForm from './PlayListForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="mainbody">
          <PlayListForm />
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
