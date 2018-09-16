import React, {Component} from 'react';
import {withAlert} from 'react-alert';

class Login extends Component {
  render() {
    return (<div>
      <p><strong>Login</strong></p>
      <input type='text' name='username' placeholder='username'/>
      <br></br>
      <input type='password' name='password' placeholder='password'/>
      <br></br>
      <button>Sign-In</button>
    </div>);
  }
}
export default withAlert(Login);
