import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import Modal from './modal'
import RegistrationForm from "./registrationForm"
import LoginForm from "./loginForm"

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      confirm_password: '',
      currentUser: null,
      isRegistrationModalOpen: true,
      isLoginModalOpen: false,
    }
  }

  setUser = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const confirm_password = e.target.elements.confirm_password.value
    if (email === "" || password === "") {
      return this.props.alert.show('Cannot leave text field blank')
    } else if (password !== confirm_password) {
      return this.props.alert.show('Invalid password confirmation')
    } else {
      fetch(`/register`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value})
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          currentUser: data,
        })
        if (this.state.currentUser !== null){
          this.setState({
            isRegistrationModalOpen: false
          })
        }
        console.log(data)
      }).catch(err => console.log("$$MyError:", err))
      return this.props.alert.show('User already exists, please login')
    };
  }

openRegistrationModal = (e) => {
  e.preventDefault();
  this.setState({
    isLoginModalOpen: false,
    isRegistrationModalOpen: true
  })
}

  openLoginModal = (e) => {
    e.preventDefault();
    this.setState({
      isLoginModalOpen: true,
      isRegistrationModalOpen: false
    })
  }

    render() {
      return (<div>
        <div>
          <Modal isOpen={this.state.isRegistrationModalOpen}>
          <form onSubmit={this.setUser}>
          <RegistrationForm />
          </form>
          <button onClick={this.openLoginModal}>Lgogin</button>
          </Modal>
          </div>

          <div>
          <Modal isOpen={this.state.isLoginModalOpen}>
          <form>
          <LoginForm />
          </form>
          <button onClick={this.openRegistrationModal}>Sign-Up</button>
          </Modal>
          </div>

        </div>);
    };
  }

  export default withAlert(Register);
