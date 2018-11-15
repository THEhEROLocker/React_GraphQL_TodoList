import React, { Component } from 'react';
import './App.css';

import Todos from './Todos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos from the magic DB</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
