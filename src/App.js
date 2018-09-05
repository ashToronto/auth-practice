import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './components/login.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currency: []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>CRYPTON</h1>
        <Login />
      </div>
    );
  }
}

export default App;
