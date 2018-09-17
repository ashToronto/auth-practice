import React, {Component} from 'react';

class RegistrationForm extends Component {
  render() {
    return (<div>
      <input type='text' name='username' placeholder='username'/>
      <br></br>
      <input type='text' name='email' placeholder='email'/>
      <br></br>
      <input type='password' name='password' placeholder='password'/>
      <br></br>
      <input type='password' name='confirm_password' placeholder='confirm password'/>
      <br></br>
      <button>Register</button>
    </div>);
  }
}
export default RegistrationForm;
