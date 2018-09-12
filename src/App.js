import React, { Component } from 'react';
import NewGame from './components/new-game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainSection">
        <NewGame />
      </div>
    );
  }
}

export default App;
