import React, { Component } from 'react';
import logo from './logo.svg';
import Register from './components/register.js';
import './App.css';

import { Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// optional cofiguration for notification alert
const options = {
  position: 'top center',
  timeout: 3000,
  offset: '50px',
  transition: 'scale'
}

class App extends Component {
  render() {
    return (
      <Provider template={AlertTemplate} {...options}>
      <div className="App">
        <h1>CRYPTON</h1>
        <Register />
      </div>
    </Provider>
    );
  }
}

export default App;
