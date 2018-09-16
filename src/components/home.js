import React, {Component} from 'react';
import Authenticate from './authenticate.js';
import { Redirect } from "@reach/router";


class Home extends Component {

getHomePage = () => {
  fetch('api/users/home', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
    credentials: 'include',
  }).then(res => res.json())
      .then(res => {
        if (res.Redirect === true) {
          window.location.replace(res.url);
        } else {
          console.log("FETCH WORKED")
        }
  });
}

componentDidMount(){
  this.getHomePage();
}
  render() {
    return (<div>
         <h1>CRYPTON HOME SCREEN</h1>
    </div>);
  }
}
export default Home;
