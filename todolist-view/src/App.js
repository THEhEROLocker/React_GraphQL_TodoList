import React, { Component } from 'react';
import './App.css';

import Todos from './Todos'
import Input from './Input'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todos from the magic DB</h1>
        <Input />
        <Todos />
      </div>
    );
  }
}

export default App;
