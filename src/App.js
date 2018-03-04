import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import ControlBar from './components/ControlBar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ControlBar/>
        <List/>        
      </div>
    );
  }
}

export default App;
