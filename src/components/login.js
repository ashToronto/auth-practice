import React, { Component } from 'react';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  setUser = (e) => {
    e.preventDefault();
    const name = e.target.elements.username.value
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    console.log(name, email, password)
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.setUser}>
          <input type='text' name='username' placeholder='username' /><br></br>
          <input type='text' name='email' placeholder='email' /><br></br>
          <input type='password' name='password' placeholder='password' /><br></br>
          <button>Sign-In</button>
        </form>
      </div>
    );
  }
}

export default Login;
