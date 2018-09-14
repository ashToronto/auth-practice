import React, {Component} from 'react';
import {withAlert} from 'react-alert';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      currentUser: null,
    }
  }

  getLogin = (e) => {
    e.preventDefault();
    console.log('logging in')
    fetch(`/login`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      })
    })

  }

  render() {
    return (<div>
      <form onSubmit={this.getLogin}>
      <p><strong>Login</strong></p>
      <input type='text' name='username' placeholder='username'/>
      <br></br>
      <input type='password' name='password' placeholder='password'/>
      <br></br>
      <button>Sign-In</button>
      </form>
    </div>);
  }
}
export default withAlert(Login);
