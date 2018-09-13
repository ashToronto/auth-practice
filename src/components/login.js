import React, {Component} from 'react';
import {withAlert} from 'react-alert';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInformation: [],
    }
  }

getUserInfo = () => {
  fetch(`/register`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify()
  })
}

  render() {
    return (<div>
      <p>Logged in as: </p>
    </div>);
  }
}

export default withAlert(Register);
