import React, { Component } from 'react';
import Authenticate         from './components/authenticate.js';
import Home                 from './components/home.js';

import './App.css';
import { Router }           from "@reach/router";
// import { Redirect }         from "@reach/router";

import { Provider }         from 'react-alert';
import AlertTemplate        from 'react-alert-template-basic';
import Particles            from 'react-particles-js';

// optional cofiguration for notification alert
const options = {
  position: 'top center',
  timeout: 3000,
  offset: '50px',
  transition: 'scale',
  zIndex: 99999
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

          <Router>
            <Authenticate path="register" />
            <Home path="home" />
          </Router>
          <Particles params={particleOpt} />
      </div>
    </Provider>
    );
  }
}

export default App;
