import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  setUser = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    fetch(`/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({username: e.target.username.value, email: e.target.email.value, password: e.target.password.value})
    }).then(response => response.json()).then(data => {
      this.setState({username: username, email: email, password: password})
      console.log(username, email, password)
    }).catch(err => console.log("$$MyError:", err))
  };

  render() {
    return (<div>
      <form onSubmit={this.setUser}>
        <input type='text' name='username' placeholder='username'/>
        <br></br>
        <input type='text' name='email' placeholder='email'/>
        <br></br>
        <input type='password' name='password' placeholder='password'/>
        <br></br>
        <button>Sign-In</button>
      </form>
    </div>);
  }
}

export default Login;
