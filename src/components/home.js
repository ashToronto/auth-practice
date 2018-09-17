import React, {Component} from 'react';
import Authenticate from './authentication/authenticate.js';
import { Redirect } from "@reach/router";
import Navbar from './navbar.js';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: ''
    }
  }

getHomePage = () => {
  fetch('api/users/home', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
    credentials: 'include',
  }).then(res => res.json())
      .then(data => {
        if (data.Redirect === true) {
          window.location.replace(data.url);
        } else {
          let session = data.message[0];
          this.setState({
            username: session.username,
            email: session.email
          })
          console.log(session + " " + data)
        }
  });
}

componentDidMount(){
  this.getHomePage();
}
  render() {
    return (<div>
         <h1>CRYPTON HOME SCREEN</h1>
         <div>
         <Navbar />
         Logged in as: {this.state.username}
       </div>
    </div>);
  }
}
export default Home;
