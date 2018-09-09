import React, { Component } from 'react';
import Register from './components/register.js';
import './App.css';

import { Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Particles from 'react-particles-js';

// optional cofiguration for notification alert
const options = {
  position: 'top center',
  timeout: 3000,
  offset: '50px',
  transition: 'scale'
}

// Set particle effects on main page
const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <Provider template={AlertTemplate} {...options}>
      <div>
          <h1>CRYPTON</h1>
          <Register />
          <Particles params={particleOpt} />
      </div>
    </Provider>
    );
  }
}

export default App;
