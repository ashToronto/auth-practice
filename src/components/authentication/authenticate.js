import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import { Redirect } from "@reach/router";
import Modal from './modal'
import RegistrationForm from "./registrationForm"
import Login from "./login"

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      isRegistrationModalOpen: true,
      isLoginModalOpen: false
    }
  }

  setUser = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const confirm_password = e.target.elements.confirm_password.value
    if (email === "" || password === "") {
      return this.props.alert.show('Cannot leave text field blank')
    } else if (password !== confirm_password) {
      return this.props.alert.show('Invalid password confirmation')
    } else {
      fetch(`api/users/register`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({username: e.target.username.value, email: e.target.email.value, password: e.target.password.value})
      }).then(response => response.json()).then(data => {
        console.log(data)
        if (data.Redirect) {
          window.location.replace(data.url);
        }
      }).catch(err => console.log("$$MyError:", err))
      return this.props.alert.show('This username or email already exists')
    }
  }

  getLogin = (e) => {
    e.preventDefault();
    fetch(`api/users/login`, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({username: e.target.username.value, password: e.target.password.value})
    }).then(response => response.json()).then(data => {
      if (data.Redirect) {
        document.cookie=""
        window.location.replace(data.url);
      } else {
        return this.props.alert.show('Invalid username or password')
      }
    })
  };

  openRegistrationModal = (e) => {
    e.preventDefault();
    this.setState({isLoginModalOpen: false, isRegistrationModalOpen: true})
  }

  openLoginModal = (e) => {
    e.preventDefault();
    this.setState({isLoginModalOpen: true, isRegistrationModalOpen: false})
  }

  render() {
    return (<div>
      <div>
        <Modal isOpen={this.state.isRegistrationModalOpen}>
          <button onClick={this.openRegistrationModal}>Sign-Up</button>
          <button onClick={this.openLoginModal}>Login</button>
          <form onSubmit={this.setUser}>
            <p>
              <strong>SignUp</strong>
            </p>
            <RegistrationForm/>
          </form>
        </Modal>
      </div>

      <div>
        <Modal isOpen={this.state.isLoginModalOpen}>
          <button onClick={this.openRegistrationModal}>Sign-Up</button>
          <button onClick={this.openLoginModal}>Login</button>
          <form onSubmit={this.getLogin}>
            <Login/>
          </form>
        </Modal>
      </div>
    </div>);
  };
}
export default withAlert(Register);
