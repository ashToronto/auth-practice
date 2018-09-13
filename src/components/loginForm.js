import React, {Component} from 'react';

class LoginForm extends Component {
  render() {
    return (<div>
      <input type='text' name='username' placeholder='username'/>
      <br></br>
      <input type='password' name='password' placeholder='password'/>
      <br></br>
      <button>Sign-In</button>
    </div>);
  }
}
export default LoginForm;
